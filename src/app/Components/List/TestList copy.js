import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const API_BASE_URL = '/api/List/TestList';

    const loadData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}?page=${page}&limit=5`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const newData = await response.json();
            if (newData.length > 0) {
                setData((prevData) => [...prevData, ...newData]);
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (!loading && scrollTop + clientHeight >= scrollHeight - 20) {
            loadData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    return (
        <div>
            <h1>Infinite Scrolling Example</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default Home;
