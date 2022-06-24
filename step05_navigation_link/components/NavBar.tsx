import Link from 'next/link';

function Navbar() : JSX.Element{
    return (
        <div>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact' preload={false}>Contact</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;