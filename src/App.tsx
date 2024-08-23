import { useEffect, useState } from 'react';
import { BsEye, BsWater, BsThermometer, BsWind } from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';

import SearchForm from './components/SearchForm';
import WeatherIcon from './components/WeatherIcon';
import { WeatherData } from './interface/wheater';
import { fetchWeatherData } from './api/api';


function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState('San gil');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchWeatherData(location);
      if (result) {
        setData(result);
        setError('');
      } else {
        setData(null);
        setError('Ciudad no disponible');
      }
    };
    fetchData();
  }, [location]);

  console.log(data);

  if (!data && !error) {
    return (
      <div className="App">
        <ImSpinner8 className='text-5xl animate-spin' />
      </div>
    );
  }

  const date = new Date();

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen px-4 bg-no-repeat bg-cover bg-gradient-to-br from-green-500 to-red-500 lg:px-0'>
      <SearchForm
        inputValue={inputValue}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      {error ? (
        <div className='text-2xl text-white'>{error}</div>
      ) : (
        data && (
          <div className='w-full max-w-[450px] min-h-[530px] backdrop-blur-[40px] bg-black/20 text-white p-4 rounded-[32px] py-12 px-6'>
            <div className='flex items-center gap-x-5'>
              <WeatherIcon weather={data.weather[0].main} />
              <div>
                <div className='text-2xl font-bold'>{data.name}, {data.sys.country}</div>
                <div>
                  {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
                </div>
              </div>
            </div>
            <div className='my-20'>
              <div className='flex items-center justify-center'>
                <div className='text-[114px] leading-none font-semibold'>
                  {Math.round(data.main.temp)}
                </div>
                <div className='text-4xl'><TbTemperatureCelsius /></div>
              </div>
              <div className='text-center capitalize'>{data.weather[0].description}</div>
            </div>
            <div className='max-w-[378px] mx-auto flex flex-col gap-y-6'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-2'>
                  <div className='text-[20px]'><BsEye /></div>
                  <div>Visibility <span className='ml-2'>{data.visibility / 1000}</span> km</div>
                </div>
                <div className='flex items-center gap-x-2'>
                  <div className='text-[20px]'><BsThermometer /></div>
                  <div>Feel like <span className='ml-2'>{Math.round(data.main.feels_like)}</span> °C</div>
                </div>
              </div>
            </div>
            <div className='max-w-[378px] mx-auto flex flex-col mt-6'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-2'>
                  <div className='text-[20px]'><BsWater /></div>
                  <div>Humidity <span className='ml-2'>{data.main.humidity}</span> %</div>
                </div>
                <div className='flex items-center gap-x-2'>
                  <div className='text-[20px]'><BsWind /></div>
                  <div>Wind <span className='ml-2'>{data.wind.speed}</span> m/s</div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
