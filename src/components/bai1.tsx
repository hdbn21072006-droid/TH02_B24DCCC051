import React, { useState } from 'react';
import axios from 'axios';

interface WeatherData {
    current_condition: [
        {
            temp_C: string;
            weatherDesc: [{ value: string }];
        }
    ];
    nearest_area: [
        {
            areaName: [{ value: string }];
        }
    ];
}

const Weather: React.FC = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        if (!city) {
            setError('Vui lòng nhập tên thành phố!');
            return;
        }
        setError('');
        setWeather(null);
        try {
            const response = await axios.get(`https://wttr.in/${city}?format=j1`);
            setWeather(response.data);
        } catch (err) {
            setError('Không tìm thấy thành phố. Vui lòng thử lại.');
        }
    };

    return (
        <div>
            <h2>Bài 1: Ứng dụng thời tiết</h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Nhập tên thành phố (VD: Hanoi)"
            />
            <button onClick={fetchWeather}>Lấy thông tin</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <div>
                    <h3>Thời tiết tại {weather.nearest_area[0].areaName[0].value}</h3>
                    <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
                    <p>Tình trạng: {weather.current_condition[0].weatherDesc[0].value}</p>
                </div>
            )}
        </div>
    );
};


export default Weather;