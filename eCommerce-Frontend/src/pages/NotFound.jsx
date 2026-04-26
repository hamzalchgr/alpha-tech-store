import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen px-4 text-center">
      <h1 className="text-2xl font-bold max-w-[400px] uppercase leading-tight">The page you requested<br/>could not be found</h1>
      <p className="font-medium max-w-[500px]">Sorry, the page you are looking for may have been deleted, its name changed, or it may not be available at this time.</p>
      <Link className="h-10 max-w-[500px] bg-primary text-surface-muted grid place-items-center px-4" to="/">Go to the alpha.com homepage</Link>
    </div>
  )
}

export default NotFound;