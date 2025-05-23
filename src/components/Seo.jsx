import Head from 'next/head'

const Seo = () => {
	return (
		<Head>
			<title key="title">Genix Auctions</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta
				name="description"
				key="description"
				content="Done By Sibisugan K"
			/>

			<meta property="og:title" key="og:title" content="Genix Auctions" />
			<meta
				name="og:description"
				key="og:description"
				content="Done By Sibisugan K"
			/>
		</Head>
	)
}

export default Seo
