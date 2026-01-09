

export const Users = ({ users }) => (

  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      className="is-active" // клас для підсвітки активного стану
    >
      All
    </a>
    
    {users.map(user => (
      <a
        key={user.id}
        data-cy="FilterAllUsers"
        href="#/"
      >
        {user.name}
      </a>
    ))}
  </p>
);

