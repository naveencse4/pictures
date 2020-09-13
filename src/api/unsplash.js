import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Yk86Vneo7xq_Lo-FBn-blt4q6j7NfpcBe-qp580Lz2k'
    }
})