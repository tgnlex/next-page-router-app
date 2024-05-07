function Meta({title, description, keywords}: {
  description: string;
  keywords: string;
  title: string;
}) {
  return (
    <>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="description" content={description}/>
    <meta name="keywords" content={keywords}/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  )
}

export {Meta};