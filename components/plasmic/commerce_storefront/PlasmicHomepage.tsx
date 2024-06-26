// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHQW2pvgnMYkU9Giixod5o
// Component: W0-SEgt8sscu

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import NavBar from "../../NavBar"; // plasmic-import: iNwwBLw9XQnu/component
import { CategoryCollection } from "@plasmicpkgs/commerce";
import Collection from "../../Collection"; // plasmic-import: x_dGLor2_oEJ/component
import { CategoryMedia } from "@plasmicpkgs/commerce";
import { CategoryField } from "@plasmicpkgs/commerce";
import { ProductCollection } from "@plasmicpkgs/commerce";
import ProductMain from "../../ProductMain"; // plasmic-import: ayrlMeEPbN2C/component
import ShopingSection from "../../ShopingSection"; // plasmic-import: PJKGmjlyXMJV/component
import Instagram from "../../Instagram"; // plasmic-import: ZmBvv8sxrP0d/component
import Footer from "../../Footer"; // plasmic-import: nFcd2pXWxj3u/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: uHQW2pvgnMYkU9Giixod5o/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: W0-SEgt8sscu/css

import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: XXG-MBaBsioY/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  heroSection?: Flex__<"div">;
  navBar?: Flex__<typeof NavBar>;
  container3?: Flex__<"div">;
  h1?: Flex__<"h1">;
  button?: Flex__<"button">;
  h2?: Flex__<"h2">;
  columns?: Flex__<"div">;
  productCollection?: Flex__<typeof ProductCollection>;
  productMain?: Flex__<typeof ProductMain>;
  shopingSection?: Flex__<typeof ShopingSection>;
  instagram?: Flex__<typeof Instagram>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicHomepage.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"heroSection"}
            data-plasmic-override={overrides.heroSection}
            className={classNames(projectcss.all, sty.heroSection)}
          >
            <NavBar
              data-plasmic-name={"navBar"}
              data-plasmic-override={overrides.navBar}
              className={classNames("__wab_instance", sty.navBar)}
            />

            <section className={classNames(projectcss.all, sty.section__sQBam)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"container3"}
                data-plasmic-override={overrides.container3}
                hasGap={true}
                className={classNames(projectcss.all, sty.container3)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hooD)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__npmk8)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"The care you've always needed"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__i36B
                      )}
                    >
                      {"A RANGE OF PRODUCTS FOR YOU"}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__hGaO7)}
                    >
                      <button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames(
                          projectcss.all,
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.button
                        )}
                      >
                        {"Shop Now"}
                      </button>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </section>
          </div>
          <section className={classNames(projectcss.all, sty.section__ibRn)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eUKxi)}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__n7U5A
                )}
              >
                {
                  "MOISTURE IS THE ESSENCE OF WETNESS, AND WETNESS IS THE ESSENCE OF BEAUTY."
                }
              </h3>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__iRw1Q
                )}
                component={Link}
                href={`/aboutus`}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sm7Mz
                  )}
                >
                  {"Find out more"}
                </div>
                <RightArrowIcon
                  className={classNames(projectcss.all, sty.svg__w4VpM)}
                  role={"img"}
                />
              </Stack__>
            </Stack__>
          </section>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__ch3Qm)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ywnX1)}
            >
              <h2
                data-plasmic-name={"h2"}
                data-plasmic-override={overrides.h2}
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2
                )}
              >
                {"Categories"}
              </h2>
            </Stack__>
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__izoAj)}>
                <CategoryCollection
                  category={"6267de7030e3370018d347ab"}
                  className={classNames(
                    "__wab_instance",
                    sty.categoryCollection__y7NeB
                  )}
                  emptyMessage={
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__aXnF
                          )}
                        >
                          {"No collection found!"}
                        </div>
                      )}
                    </DataCtxReader__>
                  }
                  loadingMessage={
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3MSQo
                          )}
                        >
                          {"Loading..."}
                        </div>
                      )}
                    </DataCtxReader__>
                  }
                >
                  <DataCtxReader__>
                    {$ctx => (
                      <Collection
                        className={classNames(
                          "__wab_instance",
                          sty.collection___5H3C
                        )}
                      >
                        <CategoryMedia
                          className={classNames(
                            "__wab_instance",
                            sty.categoryMedia__kpOeP
                          )}
                        />
                      </Collection>
                    )}
                  </DataCtxReader__>
                </CategoryCollection>
              </div>
              <div className={classNames(projectcss.all, sty.column__xvzy)}>
                <CategoryCollection
                  category={"6267e0ec4443d3001919b87b"}
                  className={classNames(
                    "__wab_instance",
                    sty.categoryCollection___1RpHv
                  )}
                  emptyMessage={
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__nUBzW
                          )}
                        >
                          {"No collection found!"}
                        </div>
                      )}
                    </DataCtxReader__>
                  }
                  loadingMessage={
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8C4Nd
                          )}
                        >
                          {"Loading..."}
                        </div>
                      )}
                    </DataCtxReader__>
                  }
                >
                  <DataCtxReader__>
                    {$ctx => (
                      <Collection
                        className={classNames(
                          "__wab_instance",
                          sty.collection__ybv2C
                        )}
                      >
                        <CategoryMedia
                          className={classNames(
                            "__wab_instance",
                            sty.categoryMedia__fe5Cm
                          )}
                        />
                      </Collection>
                    )}
                  </DataCtxReader__>
                </CategoryCollection>
              </div>
              <div className={classNames(projectcss.all, sty.column___85Czk)}>
                <CategoryCollection
                  category={"6267e10630e3370018d76b94"}
                  className={classNames(
                    "__wab_instance",
                    sty.categoryCollection___4Jnp6
                  )}
                  emptyMessage={
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___5NGu
                          )}
                        >
                          {"No collection found!"}
                        </div>
                      )}
                    </DataCtxReader__>
                  }
                  loadingMessage={
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__dyPEq
                          )}
                        >
                          {"Loading..."}
                        </div>
                      )}
                    </DataCtxReader__>
                  }
                >
                  <DataCtxReader__>
                    {$ctx => (
                      <Collection
                        className={classNames(
                          "__wab_instance",
                          sty.collection__f0DmM
                        )}
                      >
                        <CategoryMedia
                          className={classNames(
                            "__wab_instance",
                            sty.categoryMedia__c27NJ
                          )}
                        />
                      </Collection>
                    )}
                  </DataCtxReader__>
                </CategoryCollection>
              </div>
            </div>
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section___0EHek)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eJi0L)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wRd6Y
                )}
              >
                {"Introducing Our Latest Products"}
              </div>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___3UT0
                )}
              >
                {"Limited reservations on upcoming products and restocks."}
              </h3>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__qqZx
                )}
                component={Link}
                href={`/item`}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nFwtw
                  )}
                >
                  {"See more product"}
                </div>
                <RightArrowIcon
                  className={classNames(projectcss.all, sty.svg__ynNs6)}
                  role={"img"}
                />
              </Stack__>
            </Stack__>
            <ProductCollection
              data-plasmic-name={"productCollection"}
              data-plasmic-override={overrides.productCollection}
              className={classNames("__wab_instance", sty.productCollection)}
              count={4}
              emptyMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qIkd2
                      )}
                    >
                      {"No product found!"}
                    </div>
                  )}
                </DataCtxReader__>
              }
              loadingMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__e9Yig
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </DataCtxReader__>
              }
              sort={"latest-desc"}
            >
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__dg9Ph)}
                  >
                    <ProductMain
                      data-plasmic-name={"productMain"}
                      data-plasmic-override={overrides.productMain}
                      className={classNames("__wab_instance", sty.productMain)}
                    />
                  </div>
                )}
              </DataCtxReader__>
            </ProductCollection>
          </Stack__>
          <ShopingSection
            data-plasmic-name={"shopingSection"}
            data-plasmic-override={overrides.shopingSection}
            className={classNames("__wab_instance", sty.shopingSection)}
          />

          <Instagram
            data-plasmic-name={"instagram"}
            data-plasmic-override={overrides.instagram}
            className={classNames("__wab_instance", sty.instagram)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "heroSection",
    "navBar",
    "container3",
    "h1",
    "button",
    "h2",
    "columns",
    "productCollection",
    "productMain",
    "shopingSection",
    "instagram",
    "footer"
  ],
  heroSection: ["heroSection", "navBar", "container3", "h1", "button"],
  navBar: ["navBar"],
  container3: ["container3", "h1", "button"],
  h1: ["h1"],
  button: ["button"],
  h2: ["h2"],
  columns: ["columns"],
  productCollection: ["productCollection", "productMain"],
  productMain: ["productMain"],
  shopingSection: ["shopingSection"],
  instagram: ["instagram"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  heroSection: "div";
  navBar: typeof NavBar;
  container3: "div";
  h1: "h1";
  button: "button";
  h2: "h2";
  columns: "div";
  productCollection: typeof ProductCollection;
  productMain: typeof ProductMain;
  shopingSection: typeof ShopingSection;
  instagram: typeof Instagram;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heroSection: makeNodeComponent("heroSection"),
    navBar: makeNodeComponent("navBar"),
    container3: makeNodeComponent("container3"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    productCollection: makeNodeComponent("productCollection"),
    productMain: makeNodeComponent("productMain"),
    shopingSection: makeNodeComponent("shopingSection"),
    instagram: makeNodeComponent("instagram"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "ShoeShop",
      description:
        "Ad ullamcorper eros nibh pharetra vulputate imperdiet consectetur vestibulum at ac posuere volutpat maecenas gravida dictum suscipit habitasse class scelerisque fermentum blandit mi a.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
