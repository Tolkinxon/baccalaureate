import React from 'react'
import styles from '../styles/groups/groupsThemes.module.scss'
import Image from 'next/image'

const ScientificWorks = () => {
  return (
    <div className={` shadow ${styles.groups} ${styles.groups2}`}>
      <div className="row">
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
