import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from 'reactstrap';
import s from './CV.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  const resumeLink =
    'https://raw.githubusercontent.com/mariusrp/portfolio/master/new-cv.pdf';
  const Resume = () => {
    const pdfWrapper = useRef<HTMLDivElement | null>(null);
    const [pdfPageWidth, setPdfPageWidth] = useState<number | null>(null);

    useEffect(() => {
      const element = pdfWrapper.current;
      if (element) {
        const width = element.getBoundingClientRect().width;
        console.log('Element width:', width);
        setPdfPageWidth(width);
      }
    }, []);
    const removeTextLayerOffset = () => {
      const textLayers = document.querySelectorAll(
        '.react-pdf__Page .react-pdf__Page__textContent'
      );
      textLayers.forEach((layer) => {
        const { style } = layer as HTMLElement;
        style.top = '0';
        style.left = '0';
        style.transform = '';
        style.position = 'absolute';
        style.pointerEvents = 'none';
        style.zIndex = '2'; // Ensure it's above the canvas but below everything else
        style.backgroundColor = 'transparent'; // Ensure the background is transparent
        style.color = 'transparent'; // Set the text color to transparent
      });
    };

    return (
      <main>
        <section className="pb-150">
          <Container className="py-lg-md">
            <div className={s.content}>
              <div className={s.header}>
                <h1 className={s.title}>My CV</h1>
                <div className={s.filesImg}></div>
              </div>

              <Button
                style={{ margin: 'auto', width: '15rem' }}
                className="primary"
                href={resumeLink}
                target="_blank"
              >
                <i className="fa fa-download" aria-hidden="true"></i>
                <span className={s.downloadText}>download CV</span>
                <span className={s.filename}>.pdf</span>
              </Button>

              <div className={s.pdfWrapper} ref={pdfWrapper}>
                {loading && <div className={s.spinner}></div>}{' '}
                <Document
                  file={{ url: resumeLink }}
                  onLoadStart={() => setLoading(true)}
                  onLoadSuccess={() => {
                    setLoading(false);
                    removeTextLayerOffset();
                  }}
                  onError={(error) => {
                    console.error('Document error:', error);
                    setLoading(false);
                  }}
                >
                  <Page
                    onLoadSuccess={removeTextLayerOffset}
                    onError={(error) => console.error('Page error:', error)}
                    width={pdfPageWidth || undefined}
                    pageNumber={1}
                  />
                </Document>
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  };

  return <Resume />;
};

export default CV;
