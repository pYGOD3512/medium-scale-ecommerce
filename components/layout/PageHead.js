import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Name - Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead