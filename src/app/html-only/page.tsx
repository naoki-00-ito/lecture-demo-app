import { Container } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainVisual from '@/components/MainVisual';
import ImageBox from '@/components/ImageBox';
import Cards from '@/components/Cards';
import styles from '@/styles/HtmlOnly.module.css';

export default function HtmlOnly() {
  const noJs = true;

  return (
    <Container className={styles.HtmlOnly}>
      <Header />

      <main>
        <MainVisual noJs={noJs} />

        <ImageBox src='/01.JPG' noJs={noJs} />

        <ImageBox src='/02.JPG' imagePosition='right' noJs={noJs} />

        <ImageBox src='/03.JPG' noJs={noJs} />

        <ImageBox src='/04.JPG' imagePosition='right' noJs={noJs} />

        <Cards
          srcs={[
            '/01.JPG',
            '/02.JPG',
            '/03.JPG',
            '/04.JPG',
            '/01.JPG',
            '/02.JPG',
            '/03.JPG',
            '/04.JPG',
            '/01.JPG',
            '/02.JPG',
            '/03.JPG',
            '/04.JPG',
          ]}
          noJs={noJs}
        />
      </main>

      <Footer />
    </Container>
  );
}
