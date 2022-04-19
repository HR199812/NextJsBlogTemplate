import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="p-4" style={{ backgroundColor: "black", color: "white" }}>
        <div class="mt-4 container-2 ...">
          <div class="flex flex-row ...">
            <div>
              <p style={{ textAlign: "justify" }}>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div class="ml-16 mr-4 flex flex-row ...">
              <div class="flex flex-col ...">
                <div class="basis-1/4">
                  <Link href="">
                    <a>Home</a>
                  </Link>
                </div>
                <div class="basis-1/4">
                  <Link href="">
                    <a class="w-full aspect-video ...">About</a>
                  </Link>
                </div>
                <div class="basis-1/4">
                  <Link href="">
                    <a class="w-full aspect-video ...">Blog</a>
                  </Link>
                </div>
                <div class="basis-1/4">
                  <Link href="">
                    <a class="w-full aspect-video ...">Sign In</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <p className="text-center">&#169; Copyright 2022 | BlogTheme.com</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
