import React from "react";
import './BrandStory.css';
import FloatingButtons from '../components/FloatingButtons';

export default function BrandStory() {
    return (
        <>
            <div style={{ maxWidth: '1245px', margin: '60px auto' }}>
                <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '50px' }}>
                    브랜드 스토리
                </h2>
            </div>

            <div className="brandstory-bg">
                <div className="brandstory-container">
                    <section>
                        <img src="/images/brandstory1.jpg" alt="브랜드스토리 이미지 1" />
                        <p className="intro-text">안녕하세요. 모들담 대표 김서희입니다.</p>
                        <p>저는 어린 시절부터 화학, 인공원료, 인공 향에 노출되면 두통과 메스꺼움을 느끼곤 했습니다.<br/>그 괴로움으로 인해 세정제, 기초화장품을 사용하는것이 무척 힘들었습니다.</p>
                        <p>성인이 되어서는 천연 제품을 찾아 사용하였지요.<br/>뷰티업을 20년 넘게 운영하면서 저와 비슷한 고객들을 많이 만나며 천연의 중요성을 더욱 더 절실히 인식하게 되었습니다.<br/>하지만 시중에서 구할 수 있는 원료들은 화학, 인공이 대부분이고, 천연 유래 원료들도 성분 함량이 만족스럽지 못했습니다.</p>
                    </section>

                    <section>
                        <img src="/images/brand.png" alt="브랜드스토리 이미지 2" />
                        <p className="intro-text">저는 제가 태어난 청정 제주에서 원물과 원료를 찾기 시작했습니다.</p>
                        <p>가장 이상적인 배합을 알기 위해 약초관리사 자격증, 맞춤형화장품조제관리사 자격증 등을 갖추어 공방을 운영하게 되었습니다.<br />
                        그리하여 피부 타입별로 약초와 허브를 세심하게 선별하여 모들담만의 비누 레시피를 완성하게 되었습니다. <br/>
                
                        </p>
                    </section>

                    <section>
                        <img src="/images/brandstory3.jpg" alt="브랜드스토리 이미지 3" />
                        <p className="last-txt">일반 천연 수제비누 제조 방식인 핸드블랜더를 사용하면 시간과 노력이 단축되어 대량화와 공장화가 가능합니다.<br />
                        하지만 저희 모들담은 제가 직접 오랜 시간 주걱질을하여, 한 번에 많은 양을 만들기보다,</p>
                        <p className="intro-text">비누 하나하나에 진심을 담았습니다.<br />
                        저는 비누를 만드는 성분과 과정에 누구보다 자신이 있습니다.</p>
                    </section>

                    <p className="signature">— 모들담 대표 김서희</p>
                </div>
                 <FloatingButtons />
            </div>
        </>
    );
}
