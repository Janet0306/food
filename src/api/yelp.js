import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5LLGF6Br5kaYYDLTx9YeYSCa0rk-9zd_mmblDU764KQ5To_UBZ95lgH_UUUyUfEwwqYn2w5jjDstoaxWcavUPPKVpVWLPDwXDACZ4d1BzS0fNN4saS97hfW9KsIFX3Yx'
    }
});