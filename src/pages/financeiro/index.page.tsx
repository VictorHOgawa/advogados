import { WithdrawModal } from "@/components/financeiro/WithdrawModal";
import Theme from "@/styles/themes";
import { useEffect, useRef, useState } from "react";
import {
  Content,
  Main,
  RevenueCard,
  WithDrawContainer,
  WithdrawDiv,
} from "./styles";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import { UsersTable } from "@/components/financeiro/Table";

export default function Profile() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const main = useRef(null);
  const content = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-100%",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    }, main);
    return () => ctx.revert();
  }, []);
  const fadeOut = () => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        opacity: 0,
        duration: 0.5,
      });
    }, main);
    return () => ctx.revert();
  };
  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <Main>
            <h2>Financeiro</h2>
            <WithDrawContainer>
              <WithdrawDiv>
                <div>
                  <p> Disponível para retirada </p>
                  <h3> R$ 3500,00 </h3>
                </div>

                <div>
                  <button>Fazer Retirada</button>
                </div>
              </WithdrawDiv>
              <RevenueCard>
                <div style={{ width: "40%", justifyContent: "center" }}>
                  <img src="/revenueCardIco.svg" alt="" />
                </div>
                <div>
                  <h3>
                    {" "}
                    Total de sua <br />
                    Receita:
                  </h3>
                  <h2> R$ 17.357,19</h2>
                  <p> Disponível para Saque</p>
                </div>
              </RevenueCard>
            </WithDrawContainer>
            <div
              style={{
                borderTop: "1px solid" + Theme.color.gray_20,
                margin: "2rem 0 2rem 0.1rem",
              }}
            />
            <header>
              <h2>Seu Extrato</h2>
            </header>
            <UsersTable />
          </Main>
        </Content>
        <WithdrawModal
          show={showWithdrawModal}
          onHide={() => setShowWithdrawModal(false)}
        />
      </RootLayout>
    </main>
  );
}
