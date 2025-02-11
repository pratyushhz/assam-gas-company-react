import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const Tender = () => {
  // Sample tender data
  const tenderData = useMemo(
    () => [
      {
        sl: 1,
        title:
          "GEM/2025/B/5918966 - NIT The centre has floated Custom/BoQ based bidding through GeM portal for the procurement of Nanodrop Spectrophotometer",
        lastDate: "27-02-2025 18:00 PM",
      },
      {
        sl: 2,
        title:
          "GEM/2025/B/5918999 - Procurement of High Precision Analytical Balance for Laboratory",
        lastDate: "01-03-2025 17:00 PM",
      },
    ],
    []
  );

  // Search state
  const [search, setSearch] = useState("");

  // Filter data based on search input
  const filteredData = useMemo(() => {
    return tenderData.filter((tender) =>
      tender.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, tenderData]);

  // Column Definitions using `createColumnHelper`
  const columns = useMemo(
    () => [
      columnHelper.accessor("sl", { header: "SL" }),
      columnHelper.accessor("title", { header: "Tender Title" }),
      columnHelper.accessor("lastDate", { header: "Last Submission Date" }),
    ],
    []
  );

  // Initialize TanStack Table
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Tender List</h2>

      {/* Search Bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tenders..."
        className="border p-2 rounded mb-4 w-full"
      />

      {/* Table */}
      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2 text-left">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tender;
