import { IoMdSearch } from 'react-icons/io';

type SearchFormProps = {
    inputValue: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({ inputValue, handleInput, handleSubmit }: SearchFormProps) => (
    <form className='w-full max-w-[450px] h-16 bg-black/20 rounded-full backdrop-blur-[32px] mb-8' onSubmit={handleSubmit}>
        <div className='flex items-center justify-between w-full h-full p-4'>
            <input
                type="text"
                placeholder='Search Location'
                className='flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full'
                value={inputValue}
                onChange={handleInput}
            />
            <button
                type='submit'
                className='flex items-center justify-center w-20 h-12 bg-yellow-500 rounded-full hover:bg-yellow-600'>
                <IoMdSearch className='text-2xl text-white' />
            </button>
        </div>
    </form>
);

export default SearchForm;
