import {
    IconBrandGithub,
    IconBrandWhatsapp,
    IconMail,
} from '@tabler/icons-react';

export default function Contact() {
    return (
        <div className='bg-slate-600 h-[100%] text-slate-400 p-6 sm:p-12 border-t-4 border-komari-100'>
            <h3 className='pb-6'>Contact</h3>
            <div className='flex justify-between'>
                <div>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <a
                                href=''
                                className='flex items-center text-sm gap-1'
                            >
                                <IconBrandWhatsapp size={18} />
                                +62 851 8388 0971
                            </a>
                        </li>
                        <li>
                            <a
                                href=''
                                className='flex items-center text-sm gap-1'
                            >
                                <IconBrandGithub size={18} />
                                RuiMaaw
                            </a>
                        </li>
                        <li>
                            <a
                                href=''
                                className='flex items-center text-sm gap-1'
                            >
                                <IconMail size={18} />
                                cardinalityofn@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Version 1/2024</h3>
                    <h3>&#169;RuiMaaw</h3>
                </div>
            </div>
        </div>
    );
}
