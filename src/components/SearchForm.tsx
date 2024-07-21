import { IoMdSearch } from 'react-icons/io';

type SearchFormProps = {
    inputValue: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({ inputValue, handleInput, handleSubmit }: SearchFormProps) => (
    <form className='w-full max-w-[450px] h-16 bg-black/20 rounded-full backdrop-blur-[32px] mb-8' onSubmit={handleSubmit}>
        <div className='w-full h-full flex items-center justify-between p-4'>
            <input
                type="text"
                placeholder='Search Location'
                className='flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full'
                value={inputValue}
                onChange={handleInput}
            />
            <button
                type='submit'
                className='bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center'>
                <IoMdSearch className='text-2xl text-white' />
            </button>
        </div>
    </form>
);

export default SearchForm;
