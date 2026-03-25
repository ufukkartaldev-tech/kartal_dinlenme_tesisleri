'use client';

import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Wind, Eye } from 'lucide-react';

const WeatherWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Her dakika güncelle

    return () => clearInterval(timer);
  }, []);

  // Statik hava durumu verisi (gerçek API yerine)
  const weatherData = {
    location: 'İkisu, Gümüşhane',
    temperature: 18,
    condition: 'Parçalı Bulutlu',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    icon: 'partly-cloudy'
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Cloud className="w-8 h-8 text-gray-400" />;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 shadow-lg border border-blue-200 max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Hava Durumu</h3>
          <p className="text-xs text-gray-500">{weatherData.location}</p>
        </div>
        <div className="text-xs text-gray-500">
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Main Weather Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getWeatherIcon(weatherData.icon)}
          <div>
            <div className="text-2xl font-bold text-gray-800">
              {weatherData.temperature}°C
            </div>
            <div className="text-sm text-gray-600">
              {weatherData.condition}
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-3 gap-3 text-xs">
        <div className="flex flex-col items-center bg-white/50 rounded-lg p-2">
          <Thermometer className="w-4 h-4 text-red-500 mb-1" />
          <span className="text-gray-600">Nem</span>
          <span className="font-semibold text-gray-800">{weatherData.humidity}%</span>
        </div>
        
        <div className="flex flex-col items-center bg-white/50 rounded-lg p-2">
          <Wind className="w-4 h-4 text-blue-500 mb-1" />
          <span className="text-gray-600">Rüzgar</span>
          <span className="font-semibold text-gray-800">{weatherData.windSpeed} km/h</span>
        </div>
        
        <div className="flex flex-col items-center bg-white/50 rounded-lg p-2">
          <Eye className="w-4 h-4 text-green-500 mb-1" />
          <span className="text-gray-600">Görüş</span>
          <span className="font-semibold text-gray-800">{weatherData.visibility} km</span>
        </div>
      </div>

      {/* Travel Tip */}
      <div className="mt-3 p-2 bg-blue-200/50 rounded-lg">
        <p className="text-xs text-blue-800 text-center">
          🚗 Yolculuk için ideal hava koşulları
        </p>
      </div>
    </div>
  );
};

export default WeatherWidget;