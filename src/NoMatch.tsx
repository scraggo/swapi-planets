import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div className="no-match">
      <p>Page not found</p>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </div>
  );
}
