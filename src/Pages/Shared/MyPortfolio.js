import React from "react";
import web from "../../Assets/web.jpg";
import software from "../../Assets/software.png";
import code from "../../Assets/code.png";
import Explore from "../../Assets/Explore.png";
import kts from "../../Assets/Kts.png";
import bikes from "../../Assets/bikes.png";
import portfolio from "../../Assets/portfolio.png";

const MyPortfolio = () => {
  return (
    <section>
      <section>
        <div class="hero min-h-screen bg-base-100 lg:w-2/3 mx-auto">
          <div class="hero-content flex-col lg:flex-row">
            <img
              className="w-10"
              src={portfolio}
              class="max-w-sm rounded-lg shadow-2xl"
              alt="profile"
            />
            <div>
              <h1 class="text-3xl text-right font-bold mt-3">
                Hi i'm <span className="text-5xl">Md. Amir Hossain Jowel</span>
              </h1>
              <p class="py-2 text-xl text-right">Junior Web Developer.</p>
              <p class="py-2 text-xl text-right">
                Email: mdamirhossainjowel@gmail.com.
              </p>
              <p class="py-2 text-xl text-right">
                Educational background: B.Sc. in Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto">
        <h1 className="text-3xl text-center font-bold text-accent">
          {" "}
          Specialized On
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-semibold text-center">
                Software Developmet
              </h2>
              <img
                className="w-32 mx-auto"
                src={software}
                alt="software specialied"
              ></img>
              <p>
                Im a Junior level software developer. I have done some software
                project on my university project. The Language i have used java
                swing, asp dot net.
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-accent">Explore More</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-semibold text-center">Programming</h2>
              <img
                className="w-32 mx-auto"
                src={code}
                alt="code specialied"
              ></img>
              <p>
                Im a Junior level programmer. I have solved 80+ problem on
                becrowd which was known erlier as URI. I have used c programming
                language.
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-accent">Explore More</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-semibold text-center">Web Developmet</h2>
              <img
                className="w-32 mx-auto"
                src={web}
                alt="web specialied"
              ></img>
              <p>
                Im a Junior level web developer.I have started this journy with
                programming hero.I have done 10 simple website project and 2 big
                project including this.
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-accent">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="card lg:w-2/3 bg-base-100 shadow-xl mx-auto mt-6">
          <h1 className="text-4xl text-center font-semibold text-accent">
            Languages I know
          </h1>
          <div class="card-body items-baseline">
            <div className="mx-auto">
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="90"
                  max="100"
                ></progress>{" "}
                <p>HTML</p>
              </div>
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="90"
                  max="100"
                ></progress>{" "}
                <p>CSS</p>
              </div>
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="90"
                  max="100"
                ></progress>{" "}
                <p>Tailwind CSS</p>
              </div>
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="90"
                  max="100"
                ></progress>{" "}
                <p>Bootstrap CSS</p>
              </div>
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="75"
                  max="100"
                ></progress>{" "}
                <p>JavaScript</p>
              </div>
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="70"
                  max="100"
                ></progress>{" "}
                <p>React</p>
              </div>
              <div className="flex justify-center items-center">
                <progress
                  className="progress progress-accent w-80 mr-3"
                  value="60"
                  max="100"
                ></progress>{" "}
                <p>Node</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="card bg-base-100 shadow-xl mx-auto mt-6">
          <h1 className="text-4xl text-center font-semibold text-accent">
            Explore My Projects
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="text-2xl font-semibold text-center">KTS Trade</h2>
                <img
                  className="w-100 mx-auto"
                  src={kts}
                  alt="software specialied"
                ></img>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-accent"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ktstradeofficial.web.app/"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="text-2xl font-semibold text-center">
                  Explore With Amir
                </h2>
                <img
                  className="w-100 mx-auto"
                  src={Explore}
                  alt="code specialied"
                ></img>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-accent"
                    target="_blank"
                    rel="noreferrer"
                    href="https://explorewithamir-c33b7.web.app/"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="text-2xl font-semibold text-center">Bikes Alaeze</h2>
                <img
                  className="w-100 mx-auto"
                  src={bikes}
                  alt="web specialied"
                ></img>
                <div class="card-actions justify-center">
                  <a
                    class="btn btn-accent"
                    target="_blank"
                    rel="noreferrer"
                    href="https://bikes-alaeze.web.app/"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center my-8">
          <h1 className="text-4xl text-accent mb-6">Contact With Me</h1>

          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <div className="card-body justify-center">
                  <form>
                    <input
                      className="input input-bordered input-accent w-full max-w-lg mb-3"
                      readOnly
                      placeholder="Full Name"
                    />

                    <input
                      className="input input-bordered input-accent w-full max-w-lg mb-3"
                      readOnly
                      placeholder="Email"
                    />
                    <input
                      className="input input-bordered input-accent w-full max-w-lg mb-3"
                      placeholder="Subject"
                    />
                    <textarea
                      className="input input-bordered input-accent w-full h-24 max-w-lg mb-3"
                      placeholder="Details"
                    />
                    <input
                      className="btn btn-primary w-full max-w-lg"
                      type="submit"
                      value="Contact"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyPortfolio;
