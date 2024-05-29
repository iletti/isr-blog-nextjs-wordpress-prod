import { useState } from "react";
import Container from "./container";
import Link from "next/link";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <div className="w-full menu-container lg:menu-horizontal rounded-box">
                <button className="menu-button lg:hidden" onClick={toggleMenu}>
                    &#9776; {/* This is the hamburger icon */}
                </button>
                <ul className={`menu ${isOpen ? "block" : "hidden"} lg:flex lg:justify-center`}>
                    <li><Link href="https://www.ilarischmidt.com/">Etusivu</Link></li>
                    <li>
                        <details>
                            <summary>Palvelut</summary>
                            <ul>
                                <li><Link href="https://www.ilarischmidt.com/palvelut/">Palvelut ja hinnasto</Link></li>
                                <li><Link href="https://www.ilarischmidt.com/palvelut/hakukoneoptimointi">Hakukoneoptimointi (SEO)</Link></li>
                                <li><Link href="https://www.ilarischmidt.com/palvelut/google-mainonta">Google mainonta</Link></li>
                                <li><Link href="https://www.ilarischmidt.com/palvelut/webkehitys">Tekninen digimarkkinointi</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="https://www.ilarischmidt.com/tietoa">Tietoa</Link></li>
                    <li><Link href="https://www.ilarischmidt.com/blogi">Blogi</Link></li>
                    <li><Link href="https://www.ilarischmidt.com/uutiset">Uutiset</Link></li>
                    <li><Link href="https://www.ilarischmidt.com/yhteystiedot">Yhteystiedot</Link></li>
                </ul>
            </div>
        </Container>
    );
}
