import Container from "./container";
import Link from "next/link";

export default function Menu() {
    return (
        <Container>
            <ul className="justify-center w-full menu lg:menu-horizontal rounded-box">
                <li><Link href="https://www.ilarischmidt.com/">Etusivu</Link></li>
                <li>
                    <details>
                        <summary>Palvelut</summary>
                        <ul>
                            <li><Link href="https://www.ilarischmidt.com/palvelut/hakukoneoptimointi">Hakukoneoptimointi (SEO)</Link></li>
                            <li><Link href="https://www.ilarischmidt.com/palvelut/google-mainonta">Google mainonta</Link></li>
                            <li><Link href="https://www.ilarischmidt.com/palvelut/web-kehitys">Web kehitys</Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link href="https://www.ilarischmidt.com/tietoa">Tietoa</Link></li>
                <li><Link href="https://www.ilarischmidt.com/blogi">Blogi</Link></li>
                <li><Link href="https://www.ilarischmidt.com/yhteystiedot">Yhteystiedot</Link></li>
            </ul>
        </Container>
    );
};
