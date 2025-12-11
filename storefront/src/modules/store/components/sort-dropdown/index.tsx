"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"

type SortDropdownProps = {
  sortBy: string
}

const SortDropdown = ({ sortBy }: SortDropdownProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const params = new URLSearchParams(searchParams.toString())
    params.set("sortBy", value)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <select
      name="sortBy"
      value={sortBy}
      onChange={handleChange}
      className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-[#7f5835] focus:outline-none focus:ring-2 focus:ring-[#7f5835]/20 cursor-pointer"
    >
      <option value="created_at">Mas recientes</option>
      <option value="price_asc">Precio: Menor a Mayor</option>
      <option value="price_desc">Precio: Mayor a Menor</option>
    </select>
  )
}

export default SortDropdown
