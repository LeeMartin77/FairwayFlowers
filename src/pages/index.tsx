import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import FeatureImage from '../components/feature-image'
import styles from './index.module.css'
import helperStyles from '../components/helper.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fairway Flowers</title>
      </Head>
      <FeatureImage image="/images/bucket_of_flowers.JPG">
        <>
          <h1>Fairway Flowers</h1>
          <h2>Cut Flowers, Petal Confetti and Arrangements</h2>
        </>
      </FeatureImage>
      <Container>
        <Row className="my-4 justify-content-sm-center">
          <Col sm={8} className="text-center">
            <h3>Fairway Flowers gives individual care and attention to all your floral visions.</h3>
          </Col>
        </Row>
        <Row className="my-4 justify-content-sm-center text-center">
          <Col sm={4}>
            <Link href="/cut-flowers">
              <a className={helperStyles.linkUnstyled}>
                {IndexImage("/images/cut_flowers.JPG", "Cut Flowers")}
                <h4>Cut Flowers</h4>
                <p>Hand selected from our private cutting garden, grown in the heart of the Cotswolds.</p>
              </a>
            </Link>
          </Col>
          <Col sm={4}>
            <Link href="/petal-confetti">
              <a className={helperStyles.linkUnstyled}>
                {IndexImage("/images/petal_confetti.jpg", "Petal Confetti")}
                <h4>Petal Confetti</h4>
                <p>Biodegradable and environmentally friendly confetti to enhance your special day.</p>
              </a>
            </Link>
          </Col>
          <Col sm={4}>
            <Link href="/bespoke-arrangements">
              <a className={helperStyles.linkUnstyled}>
                {IndexImage("/images/bespoke_arrangements.jpg", "Bespoke Arrangements")}
                <h4>Bespoke Arrangements</h4>
                <p>Your unique floral vision created in stunning seasonal flowers.</p>
              </a>
            </Link>
          </Col>
          <Col sm={4}>
            <Link href="/workshops">
              <a className={helperStyles.linkUnstyled}>
                {IndexImage("/images/workshops.jpg", "Workshop")}
                <h4>Workshops</h4>
                <p>One-to-one or Group Workshops</p>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}


function IndexImage(imagePath: string, altText: string){
  return (
    <div className={styles.indexImageContainer}>
      <Image src={imagePath} alt={altText ?? ""} layout="fill" className={styles.indexImage}/>
    </div>
  )
}