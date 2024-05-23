import styled from "@emotion/styled";
import GithubIcon from "@/assets/icons/github-icon.svg?react";
import EmailIcon from "@/assets/icons/email-icon.svg?react";
import BlogIcon from "@/assets/icons/blog-icon.svg?react";
import NotionIcon from "@/assets/icons/notion-icon.svg?react";
import AboutmeImage1 from "@/assets/images/aboutme-image-1.jpg";
import AboutmeImage2 from "@/assets/images/aboutme-image-2.jpeg";
import { projectList } from "@/contents/projects";
import Toggle from "./components/Toggle";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const sectionRef = useRef<HTMLElement[]>([]);
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    hash === "#home" &&
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    hash === "#about" &&
      window.scrollTo({
        top: sectionRef.current[1].offsetTop - 150,
        left: 0,
        behavior: "smooth",
      });
    hash === "#projects" &&
      window.scrollTo({
        top: sectionRef.current[2].offsetTop - 150,
        left: 0,
        behavior: "smooth",
      });
  }, [hash]);

  return (
    <>
      <Section1.Container ref={(el) => el && (sectionRef.current[0] = el)}>
        <Section1.Title>안녕하세요. 👋</Section1.Title>
        <Section1.Subtitle>
          담백함을 좋아하는 <b>조용원</b> 입니다.
        </Section1.Subtitle>
        <Section1.Links.Container>
          <a href="https://github.com/nyongone/">
            <Section1.Links.Item>
              <GithubIcon />
            </Section1.Links.Item>
          </a>
          <a href="mailto:auau3@kakao.com">
            <Section1.Links.Item>
              <EmailIcon />
            </Section1.Links.Item>
          </a>
          <a href="https://nyong.world/">
            <Section1.Links.Item>
              <BlogIcon />
            </Section1.Links.Item>
          </a>
          <a href="https://dyslodev.notion.site/949160b53a394cff999bd82a1598a6b9?pvs=4">
            <Section1.Links.Item>
              <NotionIcon />
            </Section1.Links.Item>
          </a>
        </Section1.Links.Container>
      </Section1.Container>
      <Divider />
      <Section2.Container ref={(el) => el && (sectionRef.current[1] = el)}>
        <Section2.Title>About Me</Section2.Title>
        <Section2.Subtitle>저를 소개합니다.</Section2.Subtitle>
        <Section2.Content.Container>
          <Section2.Content.Paragraphs>
            <Section2.Content.Paragraph.Container>
              <Section2.Content.Paragraph.Label>
                학력
              </Section2.Content.Paragraph.Label>
              <Section2.Content.Paragraph.Content>
                순천대학교 컴퓨터공학과 4학년 재학중
              </Section2.Content.Paragraph.Content>
              <Section2.Content.Paragraph.SubContent>
                컴퓨터구조, 자료구조, 웹프로그래밍, 데이터베이스, 컴파일러 등
                과목 수강 완료
              </Section2.Content.Paragraph.SubContent>
            </Section2.Content.Paragraph.Container>
            <Section2.Content.Paragraph.Container>
              <Section2.Content.Paragraph.Label>
                기술스택
              </Section2.Content.Paragraph.Label>
              <Section2.Content.Paragraph.Content>
                Javascript 내 체계적인 타입 검증을 위해 <b>Typescript</b>를
                학습하고 있으며, <b>React와</b> <b>Next.js</b> 프레임워크를
                기반으로 웹 서비스를 개발하고 있습니다.
              </Section2.Content.Paragraph.Content>
            </Section2.Content.Paragraph.Container>
            <Section2.Content.Paragraph.Container>
              <Section2.Content.Paragraph.Label>
                병역사항
              </Section2.Content.Paragraph.Label>
              <Section2.Content.Paragraph.Content>
                4급 보충역 신입
              </Section2.Content.Paragraph.Content>
            </Section2.Content.Paragraph.Container>
          </Section2.Content.Paragraphs>
          <Section2.Content.Images>
            <img src={AboutmeImage1} />
            <img src={AboutmeImage2} />
          </Section2.Content.Images>
        </Section2.Content.Container>
      </Section2.Container>
      <Divider />
      <Section3.Container ref={(el) => el && (sectionRef.current[2] = el)}>
        <Section3.Title>Projects</Section3.Title>
        <Section3.Subtitle>
          제가 했던 프로젝트들을 보여드릴게요.
        </Section3.Subtitle>
        <Section3.Projects.Container>
          {projectList.map((project) => (
            <Section3.Projects.Container key={project.id}>
              <Toggle title={project.title}>
                <Section3.Projects.Project.Content.Container>
                  <Section3.Projects.Project.Content.Paragraph.Container>
                    <Section3.Projects.Project.Content.Paragraph.Label>
                      프로젝트 기간
                    </Section3.Projects.Project.Content.Paragraph.Label>
                    <Section3.Projects.Project.Content.Paragraph.Content>
                      {project.term}
                    </Section3.Projects.Project.Content.Paragraph.Content>
                  </Section3.Projects.Project.Content.Paragraph.Container>
                  <Section3.Projects.Project.Content.Paragraph.Container>
                    <Section3.Projects.Project.Content.Paragraph.Label>
                      기술 스택
                    </Section3.Projects.Project.Content.Paragraph.Label>
                    <Section3.Projects.Project.Content.Paragraph.Content>
                      {project.tech}
                    </Section3.Projects.Project.Content.Paragraph.Content>
                  </Section3.Projects.Project.Content.Paragraph.Container>
                  <Section3.Projects.Project.Content.Paragraph.Container>
                    <Section3.Projects.Project.Content.Paragraph.Label>
                      프로젝트 개요
                    </Section3.Projects.Project.Content.Paragraph.Label>
                    <Section3.Projects.Project.Content.Paragraph.Content>
                      {project.summary}
                    </Section3.Projects.Project.Content.Paragraph.Content>
                  </Section3.Projects.Project.Content.Paragraph.Container>
                  <Section3.Projects.Project.Content.Paragraph.Container>
                    <Section3.Projects.Project.Content.Paragraph.Label>
                      기여
                    </Section3.Projects.Project.Content.Paragraph.Label>
                    <Section3.Projects.Project.Content.Paragraph.Content>
                      {project.contributes.map((c, i) => (
                        <p key={i}>{c}</p>
                      ))}
                    </Section3.Projects.Project.Content.Paragraph.Content>
                  </Section3.Projects.Project.Content.Paragraph.Container>
                  {project.website && (
                    <Section3.Projects.Project.Content.Paragraph.Container>
                      <Section3.Projects.Project.Content.Paragraph.Label>
                        웹사이트
                      </Section3.Projects.Project.Content.Paragraph.Label>
                      <Section3.Projects.Project.Content.Paragraph.Content>
                        <a href={project.website}>{project.website}</a>
                      </Section3.Projects.Project.Content.Paragraph.Content>
                    </Section3.Projects.Project.Content.Paragraph.Container>
                  )}
                  {project.github && (
                    <Section3.Projects.Project.Content.Paragraph.Container>
                      <Section3.Projects.Project.Content.Paragraph.Label>
                        GitHub 레포지토리
                      </Section3.Projects.Project.Content.Paragraph.Label>
                      <Section3.Projects.Project.Content.Paragraph.Content>
                        <a href={project.github}>{project.github}</a>
                      </Section3.Projects.Project.Content.Paragraph.Content>
                    </Section3.Projects.Project.Content.Paragraph.Container>
                  )}
                  {project.link && (
                    <Section3.Projects.Project.Content.Paragraph.Container>
                      <Section3.Projects.Project.Content.Paragraph.Label>
                        관련 링크
                      </Section3.Projects.Project.Content.Paragraph.Label>
                      <Section3.Projects.Project.Content.Paragraph.Content>
                        <a href={project.link}>{project.link}</a>
                      </Section3.Projects.Project.Content.Paragraph.Content>
                    </Section3.Projects.Project.Content.Paragraph.Container>
                  )}
                </Section3.Projects.Project.Content.Container>
              </Toggle>
            </Section3.Projects.Container>
          ))}
        </Section3.Projects.Container>
      </Section3.Container>
      <Divider />
    </>
  );
};

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  margin: 80px 0px;
  border: none;
  border-top: 1px solid #c7c7c7;
`;

const Section1 = {
  Container: styled.section`
    width: 100%;
    height: 100%;
  `,
  Title: styled.h1`
    font-size: 4rem;
    font-weight: 800;
    color: #5a5a5a;
    @media screen and (max-width: 767px) {
      font-size: 3rem;
    }
  `,
  Subtitle: styled.h2`
    line-height: 2.5rem;
    font-size: 2rem;
    font-weight: 400;
    color: #5a5a5a;
    padding-top: 22px;
    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  `,
  Links: {
    Container: styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 360px;
      height: auto;
      padding-top: 60px;
    `,
    Item: styled.li`
      width: auto;
      height: auto;
      & > svg {
        width: 60px;
        height: 60px;
      }
    `,
  },
};

const Section2 = {
  Container: styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 0;
  `,
  Title: styled.h1`
    font-size: 2rem;
    font-weight: 700;
  `,
  Subtitle: styled.h2`
    padding-top: 20px;
    font-size: 1.5rem;
  `,
  Content: {
    Container: styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      gap: 64px;
      padding-top: 60px;
      @media screen and (max-width: 767px) {
        flex-wrap: wrap;
      }
    `,
    Paragraphs: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 64px;
    `,
    Images: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      margin-top: -140px;
      @media screen and (max-width: 767px) {
        flex-direction: row;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 0;
      }
      & > img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
        opacity: 0.5;
        @media screen and (max-width: 767px) {
          width: 160px;
          height: 160px;
        }
      }
    `,
    Paragraph: {
      Container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;
      `,
      Label: styled.span`
        position: relative;
        font-size: 1.5rem;
        font-weight: 800;
        z-index: 2;
        &:after {
          position: absolute;
          left: 0;
          bottom: -3px;
          display: block;
          width: 100%;
          height: 15px;
          background-color: #c7b9b9;
          content: "";
          z-index: -1;
        }
        @media screen and (max-width: 767px) {
          font-size: 1.25rem;
        }
      `,
      Content: styled.span`
        line-height: 2rem;
        font-size: 1.5rem;
        font-weight: 400;
        @media screen and (max-width: 767px) {
          line-height: 1.5rem;
          font-size: 1rem;
        }
      `,
      SubContent: styled.span`
        line-height: 1.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: #ccc;
      `,
    },
  },
};

const Section3 = {
  Container: styled.section`
    width: 100%;
    height: 100%;
    padding: 40px 0;
  `,
  Title: styled(Section2.Title)``,
  Subtitle: styled(Section2.Subtitle)`
    margin-bottom: 64px;
  `,
  Projects: {
    Container: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: auto;
      height: auto;
      gap: 32px;
    `,
    Project: {
      Container: styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 1fr;
        justify-items: stretch;
      `,
      Title: styled.span`
        font-size: 2rem;
        font-weight: 800;
        grid-column: 1 / 2;
      `,
      Content: {
        Container: styled.ul`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-bottom: 48px;
          gap: 48px;
          grid-column: 1 / 2;
        `,
        Paragraph: {
          Container: styled.li`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;
          `,
          Label: styled(Section2.Content.Paragraph.Label)``,
          Content: styled(Section2.Content.Paragraph.Content)`
            & > p {
              padding-left: 8px;
              margin-bottom: 8px;
              &::before {
                content: "- ";
              }
            }
          `,
        },
      },
      Image: styled.img`
        width: 100px;
        height: 100px;
        grid-row: 1 / 3;
        grid-column: 2 / 3;
      `,
    },
  },
};

export default App;
