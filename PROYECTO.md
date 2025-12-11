# Mis 4 Nudos - Ecommerce de Macramé Artesanal

## Descripción del Proyecto
Tienda online para **Mis 4 Nudos**, un negocio artesanal especializado en productos de macramé hechos a mano. La plataforma está construida con Medusa.js v2 (backend headless) y Next.js 15 (storefront).

## URLs de Producción
- **Storefront**: https://mis4nudos.com
- **Admin Panel**: https://api.mis4nudos.com/app
- **API Backend**: https://api.mis4nudos.com

## Stack Tecnológico

### Backend (Medusa v2)
- **Framework**: Medusa.js v2.12.1
- **Base de datos**: PostgreSQL
- **Caché**: Redis
- **Almacenamiento**: Local file storage (`/server/static`)
- **Puerto**: 9000

### Storefront (Next.js)
- **Framework**: Next.js 15.3.6 con App Router
- **UI**: Tailwind CSS + Medusa UI
- **Modo**: Standalone (Docker optimizado)
- **Puerto**: 3000

### Infraestructura
- **VPS**: 213.199.41.60 (Hostinger)
- **Orquestador**: Docker Swarm via EasyPanel
- **SSL**: Let's Encrypt (automático via Traefik)

## Estructura del Proyecto

```
Mis4nudos/
├── backend/           # Medusa v2 backend
│   ├── src/
│   │   ├── admin/     # Customizaciones del admin
│   │   └── modules/   # Módulos personalizados
│   ├── medusa-config.ts
│   └── Dockerfile
├── storefront/        # Next.js storefront
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── lib/       # Utilities y data fetching
│   │   └── modules/   # Componentes UI
│   ├── next.config.js
│   └── Dockerfile
├── Fotos/             # Fotos de productos (local)
├── Logos/             # Assets de marca
└── PROYECTO.md        # Esta documentación
```

## Configuración de Base de Datos

### Conexión PostgreSQL
```
Host: postgres (interno Docker)
Database: medusa_db
User: admin_db
```

### Categorías Creadas
| ID | Nombre | Handle |
|----|--------|--------|
| pcat_hogar | Hogar | hogar |
| pcat_bebe | Bebé | bebe |
| pcat_navidad | Navidad | navidad |
| pcat_accesorios | Accesorios | accesorios |
| pcat_eventos | Eventos | eventos |

### Triggers Automáticos (URLs de Imágenes)
Se crearon triggers PostgreSQL para corregir automáticamente las URLs de imágenes:

```sql
-- Trigger para tabla image
CREATE OR REPLACE FUNCTION fix_image_url()
RETURNS TRIGGER AS $
BEGIN
    NEW.url = REPLACE(NEW.url, 'http://localhost:9000', 'https://api.mis4nudos.com');
    RETURN NEW;
END;
$ LANGUAGE plpgsql;

CREATE TRIGGER fix_image_url_trigger
    BEFORE INSERT OR UPDATE ON image
    FOR EACH ROW
    EXECUTE FUNCTION fix_image_url();

-- Trigger para thumbnails en product
CREATE OR REPLACE FUNCTION fix_product_thumbnail()
RETURNS TRIGGER AS $
BEGIN
    IF NEW.thumbnail IS NOT NULL THEN
        NEW.thumbnail = REPLACE(NEW.thumbnail, 'http://localhost:9000', 'https://api.mis4nudos.com');
    END IF;
    RETURN NEW;
END;
$ LANGUAGE plpgsql;

CREATE TRIGGER fix_product_thumbnail_trigger
    BEFORE INSERT OR UPDATE ON product
    FOR EACH ROW
    EXECUTE FUNCTION fix_product_thumbnail();
```

## Volúmenes Docker (EasyPanel)

### Backend - Volumen Persistente para Imágenes
```yaml
Mount Path: /server/static
Volume Name: medusa_static
```
**IMPORTANTE**: Las imágenes subidas desde el Admin Panel se guardan aquí y persisten entre reinicios.

## Configuración del Storefront

### next.config.js - Dominios de Imágenes
```javascript
images: {
  remotePatterns: [
    { protocol: "http", hostname: "localhost" },
    { protocol: "https", hostname: "api.mis4nudos.com" },
    { protocol: "https", hostname: "mis4nudos.com" },
    // ... otros dominios de S3
  ],
}
```

### Caché Desactivada para Productos
Los archivos en `src/lib/data/` usan `cache: "no-store"` para que los cambios en el Admin Panel se reflejen **instantáneamente**:
- `products.ts`
- `categories.ts`
- `collections.ts`

## Flujo de Trabajo para Productos

### Subir un Producto desde Admin Panel
1. Ir a https://api.mis4nudos.com/app
2. Products → Create
3. Rellenar título, descripción, handle
4. Subir imágenes (se guardan en `/server/static`)
5. Crear variante con precio
6. Asignar a categoría y sales channel
7. Publicar → Los cambios son **instantáneos** en el storefront

### Crear Producto via SQL (Alternativa)
```sql
-- 1. Crear producto
INSERT INTO product (id, title, handle, description, status, created_at, updated_at)
VALUES ('prod_xxx', 'Nombre', 'handle-url', 'Descripción', 'published', NOW(), NOW());

-- 2. Crear variante
INSERT INTO product_variant (id, title, sku, product_id, allow_backorder, manage_inventory, variant_rank, created_at, updated_at)
VALUES ('variant_xxx', 'Default', 'SKU-001', 'prod_xxx', true, false, 0, NOW(), NOW());

-- 3. Crear price_set y precio
INSERT INTO price_set (id, created_at, updated_at) VALUES ('pset_xxx', NOW(), NOW());
INSERT INTO price (id, price_set_id, currency_code, amount, raw_amount, created_at, updated_at)
VALUES ('price_xxx', 'pset_xxx', 'eur', 2500, '{"value": "2500", "precision": 20}', NOW(), NOW());

-- 4. Vincular variante a precio
INSERT INTO product_variant_price_set (variant_id, price_set_id)
VALUES ('variant_xxx', 'pset_xxx');

-- 5. Vincular a categoría
INSERT INTO product_category_product (product_id, product_category_id)
VALUES ('prod_xxx', 'pcat_hogar');

-- 6. Vincular a sales channel
INSERT INTO product_sales_channel (id, product_id, sales_channel_id, created_at, updated_at)
VALUES ('psc_xxx', 'prod_xxx', 'sc_01KC13QRNQVRGZR1KBZDJZSB99', NOW(), NOW());
```

## Assets de Marca (Logos y Favicons)

### Logos Disponibles en `/storefront/public/`
| Archivo | Uso | Descripción |
|---------|-----|-------------|
| `logo-2.png` | Header, Footer, Side Menu | Logo principal para fondos claros |
| `logo-blanco.png` | Fondos oscuros | Logo en blanco para usar sobre fondos oscuros |
| `favicon.ico` | Favicon general | Icono de pestaña del navegador |

### Uso de Logos según Contexto
- **Fondos claros** (blanco, beige, etc.): Usar `logo-2.png`
- **Fondos oscuros** (negro, marrón oscuro, etc.): Usar `logo-blanco.png`
- **Dark Mode del navegador**: Considerar `logo-blanco.png` y favicon alternativo

### Paleta de Colores de Marca
- **Marrón principal**: `#6B5344`
- **Marrón claro**: `#8B7355`
- **Beige fondo**: `#F5F1ED`, `#F5F0E8`
- **Beige borde**: `#E5DED6`, `#E5DDD0`

## Traducciones Implementadas (Español)

El storefront está completamente en español:
- Navegación: "Carrito", "Cuenta", "Buscar"
- Productos: "Añadir al carrito", "Agotado", "Seleccionar variante"
- Ordenar: "Más recientes", "Precio: Menor a Mayor", "Precio: Mayor a Menor"
- Carrito: "Subtotal", "Cantidad", "Eliminar", "Ver carrito"
- Envíos: "Envío rápido", "Cambios sencillos", "Devoluciones fáciles"

## Comandos Útiles

### Acceso SSH al VPS
```bash
sshpass -p 'R1bUU9x46nK6Ia' ssh root@213.199.41.60
```

### Ver logs del backend
```bash
docker ps --format '{{.Names}}' | grep medusa-backend | head -1 | xargs -I {} docker logs {} -f
```

### Ver logs del storefront
```bash
docker ps --format '{{.Names}}' | grep storefront | head -1 | xargs -I {} docker logs {} -f
```

### Ejecutar SQL en PostgreSQL
```bash
docker exec mis4nudos_postgres.1.xxx psql -U admin_db -d medusa_db -c "SELECT * FROM product;"
```

### Reiniciar servicios
```bash
docker service update --force mis4nudos_medusa-backend
docker service update --force mis4nudos_storefront
```

### Listar archivos en /static
```bash
docker ps --format '{{.Names}}' | grep medusa-backend | head -1 | xargs -I {} docker exec {} ls -la /server/static/
```

## Problemas Conocidos y Soluciones

### 1. Imágenes con URL localhost
**Problema**: Medusa guarda URLs como `http://localhost:9000/static/...`
**Solución**: Triggers PostgreSQL corrigen automáticamente a `https://api.mis4nudos.com/static/...`

### 2. Cambios no se reflejan en storefront
**Problema**: Next.js cacheaba datos indefinidamente
**Solución**: Cambiado a `cache: "no-store"` para actualizaciones instantáneas

### 3. Imágenes se pierden al reiniciar
**Problema**: El contenedor no tenía volumen persistente
**Solución**: Configurado volumen en EasyPanel para `/server/static`

## Credenciales

### VPS (Hostinger)
- IP: 213.199.41.60
- Usuario: root
- Password: R1bUU9x46nK6Ia

### PostgreSQL
- Database: medusa_db
- User: admin_db
- Password: (en variables de entorno del contenedor)

### Admin Panel
- URL: https://api.mis4nudos.com/app
- Credenciales: (las que creaste al configurar)

## Repositorio Git
- GitHub: https://github.com/SoyJuanLuque/mis4nudos.git
- Branch principal: main

## Contacto
- Negocio: Mis 4 Nudos
- Web: https://mis4nudos.com
