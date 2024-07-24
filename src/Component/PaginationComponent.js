import React, { useEffect, useState } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination'

const totalNumberOfData = 300
const numberOfPerPageData = 20

const PaginationComponent = () => {
    const [page, setPage] = useState(1)

    const [numberOfPages, setNumberOfPages] = useState(null)

    useEffect(() => {
        setNumberOfPages(Math.ceil(totalNumberOfData / numberOfPerPageData))
    }, [])

    console.log(numberOfPages);

    return (
        <div className='m-4'>
            <div className='text-center'>
                Page : {page}
            </div>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => setPage((page) => page - 1)} className={page <= 1 ? "pointer-events-none opacity-50" : ""} />
                    </PaginationItem>
                    {
                        [...Array(numberOfPages)].map((item, index) => {
                            return (
                                <div key={index}>
                                    <PaginationItem><PaginationLink onClick={() => setPage(index + 1)} isActive={page === index + 1}>{index + 1}</PaginationLink></PaginationItem>
                                </div>
                            )
                        })
                    }
                    <PaginationItem>
                        <PaginationNext onClick={() => setPage((page) => page + 1)} className={page >= numberOfPages ? "pointer-events-none opacity-50" : ""} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default PaginationComponent
