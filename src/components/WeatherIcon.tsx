import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm } from 'react-icons/io';
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs';

type WeatherIconProps = {
    weather: string;
};

const WeatherIcon = ({ weather }: WeatherIconProps) => {
    let icon;

    switch (weather) {
        case 'Clouds':
            icon = <IoMdCloudy className='text-6xl ' />;
            break;
        case 'Haze':
            icon = <BsCloudHaze2Fill className='text-6xl' />;
            break;
        case 'Rain':
            icon = <IoMdRainy className='text-6xl  text-[#31cafb]' />;
            break;
        case 'Clear':
            icon = <IoMdSunny className='text-6xl text-[#ffde33]' />;
            break;
        case 'Drizzle':
            icon = <BsCloudDrizzleFill className='text-6xl text-[#31cafb]' />;
            break;
        case 'Snow':
            icon = <IoMdSnow className='text-6xl text-[#31cafb]' />;
            break;
        case 'Thunderstorm':
            icon = <IoMdThunderstorm className='text-6xl' />;
            break;
        default:
            icon = <IoMdCloudy className='text-6xl' />;
    }

    return <div className='text-[87px] '>{icon}</div>;
};

export default WeatherIcon;
