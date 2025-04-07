enum ROLES{
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer',
}

type User = {
    username: string;
    role: ROLES;
}
const nicouser:User={
    username: 'garien',
    role: ROLES.ADMIN
}