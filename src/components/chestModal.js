// Component: ChestModal
// Def: Main ui for the chest

import React from "react";
// MARKDOWN
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// React Spring
import { useTransition, a } from "react-spring";
// Chest Audio
import chestCloseSound from "../assets/sound/close-chest.mp3";
// Markdown File
import markdownAboutMe from "../assets/markdown/README.md";

const closeChest = new Audio(chestCloseSound);

const ChestModal = ({ open, setOpen }) => {
  // Set immer state to our default state

  // Function to close the modal
  const closeModal = () => {
    setOpen(!open);
    closeChest.volume = 0.3;
    closeChest.play();
  };

  // Transitions via react-spring for when our modal mounts/unmounts
  // We fade in and fade out
  const transitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Mount/unmount single-component reveals
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.div key={key} style={props} className="modal-chest-wrapper">
          <div onClick={closeModal} className="overlay" />
          <div className="modal-chest">
            <div className="top">
              <div className="header">
                <h4>Hey, I'm Hunter!</h4>
                <div onClick={closeModal} className="close">
                  x
                </div>
              </div>
              <p>
                I'm a gamer, foodie, movie lover, student pilot, and engineer.
                <ul>
                  <li>🔭Currently full stack @ Zoom</li>
                  <li>😄 Pronouns: he/him </li>
                  <li>🌱 Learning as much as I can</li>
                  <li>🎮 Current rotation: Valorant, Splitgate</li>
                  <li>
                    ⚡ Fun fact: I went backpacking alone in Europe for my 23rd
                    birthday
                  </li>
                </ul>
              </p>
            </div>
            <div className="middle">
              <div className="header">
                <h4>Connect with me</h4>
              </div>
              <div className="connect-links">
                <a href="https://twitter.com/ghgoodreau">
                  <img
                    align="left"
                    alt="ghgoodreau | Twitter"
                    title="ghgoodreau | Twitter"
                    width="22px"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
                  />
                </a>
                <a href="https://linkedin.com/in/ghgdev">
                  <img
                    align="left"
                    alt="ghgoodreau | LinkedIn"
                    title="ghgoodreau | LinkedIn"
                    width="22px"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
                  />
                </a>
                <a href="https://instagram.com/ghgoodreau">
                  <img
                    align="left"
                    alt="ghgoodreau | Instagram"
                    title="ghgoodreau | Instagram"
                    width="22px"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg"
                  />
                </a>
                <a href="https://letterboxd.com/hgoood">
                  <img
                    align="left"
                    alt="ghgoodreau | Letterboxd"
                    title="ghgoodreau | Letterboxd"
                    width="22px"
                    src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb-500px.png"
                  />
                </a>
                <a href="https://open.spotify.com/user/o0w44i8fzljecs174msew1adw?si=c0d9f35352544a8e">
                  <img
                    align="left"
                    alt="hgoood | Spotify"
                    title="hgoood | Spotify"
                    width="22px"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/spotify.svg"
                  />
                </a>
              </div>
            </div>
            <br />
            <div className="bottom">
              <div className="header">
                <h4>Languages and tools</h4>
              </div>
              <div className="tech-stack">
                <img
                  align="left"
                  alt="JavaScript"
                  title="JavaScript"
                  width="26px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                />
                <img
                  align="left"
                  alt="React"
                  title="React"
                  width="26px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                />
                <img
                  align="left"
                  alt="Less"
                  title="Less"
                  width="26px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/less/less.png"
                />
                <img
                  align="left"
                  alt="Java"
                  title="Java"
                  width="26px"
                  src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
                />
                <img
                  align="left"
                  alt="Git"
                  title="Git"
                  width="26px"
                  src="https://img.icons8.com/ios-filled/50/000000/git.png"
                />
                <img
                  align="left"
                  alt="GitLab"
                  title="GitLab"
                  width="26px"
                  src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png"
                />
                <img
                  align="left"
                  alt="VSCode"
                  title="VSCode"
                  width="26px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                />
              </div>
            </div>
          </div>
        </a.div>
      )
  );
};

export default ChestModal;
