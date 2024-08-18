import Link from "next/link"

export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>
            <div className="basic-pagination">
                <nav>
                    <ul>
                        {getPaginationGroup.length <= 0 ? null : (
                            <li onClick={prev}>
                                {currentPage === 1 ? null : (
                                    <a>
                                        <i className="fal fa-long-arrow-left" />
                                    </a>
                                )}
                            </li>
                        )}

                        {getPaginationGroup.map((item, index) => {
                            return (
                                <li
                                    onClick={() => handleActive(item)}
                                    key={index}

                                >
                                    <a className={
                                        currentPage === item
                                            ? "current"
                                            : ""
                                    }>{item}</a>
                                </li>
                            )
                        })}

                        {getPaginationGroup.length <= 0 ? null : (
                            <li onClick={next}>
                                {currentPage >= pages ? null : (
                                    <a>
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                )}
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}