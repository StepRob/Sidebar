const MenuItem = ({ label, items }) => {

    return (
        <li>
            <a href="#" className="text-gray-400 hover:text-white">
                {label}
            </a>
            {items && (
                <ul>
                    {items.map(item => (
                        <MenuItem {...item} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
