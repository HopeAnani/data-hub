import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {users} from "./data";

const Links = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <>
    <div className='ml-4 md:ml-12 mb-4 md:mb-10'>
      <h1 className='text-2xl md:text-5xl font-semibold leading-tight text-[#173e26]'>
        Important Links
      </h1>
    </div>
    <Table className='h-[100vh] max-lg:ml-0 ml-10 w-[95%]'
      isStriped aria-label="Example static collection table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="success"
            variant='light'
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
            classNames={{
                cursor: " text-blue",
            }}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name" className=' font-extrabold text-[#173e26] text-lg'>Organization Name</TableColumn>
        <TableColumn key="description" className=' font-extrabold text-[#173e26] text-lg'>Description</TableColumn>
        <TableColumn key="link" className=' font-extrabold text-[#173e26] text-lg w-[130px]'>Link</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
                <TableCell>
                  {columnKey === "link" ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  )
}

export default Links

