import React from 'react'
import styles from '../styles/groups/groupsThemes.module.scss'
import Image from 'next/image'

const ScientificWorks = () => {
  return (
    <div className={` shadow ${styles.groups} ${styles.groups2}`}>
      <div className="row gy-5">
        {/* FIRST */}
        <div className="col-6">
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/4x4picture.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">John Taylor</h5>
                  <p class="card-text">
                  Exact Sciences: Integrating Matrices into a Broadband Surveillance System
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      2023.02.01
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* SECOND */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/man2.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Bob Richard</h5>
                  <p class="card-text">
                  Echolog: A bio-catalyst that accelerates the process of rotting waste
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      2022.03.07
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* THIRD */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/woman1.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Yekoterina Jukovskaya</h5>
                  <p class="card-text">
                  Philologist: History of works of art in the XIV century
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      2021.04.01
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* FOURTH */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/man3.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Ronald Ayzekson</h5>
                  <p class="card-text">
                  Physical: Physical processes that increase the velocity of neutral particles
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      2023.05.06
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* FIFTH */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/man4.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Henri Wick</h5>
                  <p class="card-text">
                  Geologist: Movement of natural bodies
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      2021.05.07
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* SIXTH */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/woman2.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Angelina Smith</h5>
                  <p class="card-text">
                  Veterinarian: Animal population recovery
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      2020.04.01
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* SEVENTH */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/man5.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* EIGHTHT  */}
          <div class="card mb-3" style={{ maxWidth: '550px' }}>
            <div class="row g-0">
              <div
                class="col-md-4 align-items-center justify-content-center d-flex border "
                style={{ width: '150px' }}
              >
                <Image
                  src="/woman4.jpg"
                  width={140}
                  height={140}
                  className={`${styles.img}`}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScientificWorks
