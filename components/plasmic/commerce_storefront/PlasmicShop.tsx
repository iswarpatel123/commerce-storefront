// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHQW2pvgnMYkU9Giixod5o
// Component: tgWGzcAaTgfP

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

import PaheHeaderMenuTextDark from "../../PaheHeaderMenuTextDark"; // plasmic-import: m_NOfYzJsA9O/component
import { CategoryCollection } from "@plasmicpkgs/commerce";
import { CategoryField } from "@plasmicpkgs/commerce";
import { ProductCollection } from "@plasmicpkgs/commerce";
import ProductMain from "../../ProductMain"; // plasmic-import: ayrlMeEPbN2C/component
import ShopingSection from "../../ShopingSection"; // plasmic-import: PJKGmjlyXMJV/component
import Instagram from "../../Instagram"; // plasmic-import: ZmBvv8sxrP0d/component
import Footer from "../../Footer"; // plasmic-import: nFcd2pXWxj3u/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: uHQW2pvgnMYkU9Giixod5o/projectcss
import sty from "./PlasmicShop.module.css"; // plasmic-import: tgWGzcAaTgfP/css

createPlasmicElementProxy;

export type PlasmicShop__VariantMembers = {};
export type PlasmicShop__VariantsArgs = {};
type VariantPropType = keyof PlasmicShop__VariantsArgs;
export const PlasmicShop__VariantProps = new Array<VariantPropType>();

export type PlasmicShop__ArgsType = {};
type ArgPropType = keyof PlasmicShop__ArgsType;
export const PlasmicShop__ArgProps = new Array<ArgPropType>();

export type PlasmicShop__OverridesType = {
  root?: Flex__<"div">;
  paheHeaderMenuTextDark?: Flex__<typeof PaheHeaderMenuTextDark>;
  columns?: Flex__<"div">;
  productCollection?: Flex__<typeof ProductCollection>;
  productMain?: Flex__<typeof ProductMain>;
  shopingSection?: Flex__<typeof ShopingSection>;
  instagram?: Flex__<typeof Instagram>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultShopProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicShop__RenderFunc(props: {
  variants: PlasmicShop__VariantsArgs;
  args: PlasmicShop__ArgsType;
  overrides: PlasmicShop__OverridesType;
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
        <title key="title">{PlasmicShop.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicShop.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicShop.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicShop.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicShop.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicShop.pageMetadata.description}
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
          <PaheHeaderMenuTextDark
            data-plasmic-name={"paheHeaderMenuTextDark"}
            data-plasmic-override={overrides.paheHeaderMenuTextDark}
            className={classNames("__wab_instance", sty.paheHeaderMenuTextDark)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__xnzja)}>
            <div className={classNames(projectcss.all, sty.freeBox__pRt31)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__lWYq)}
                >
                  <CategoryCollection
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection___9Dk4
                    )}
                    emptyMessage={
                      <DataCtxReader__>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__l7Gak
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
                              sty.text__rw00X
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
                        <h4
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            sty.h4__blsRp
                          )}
                        >
                          <CategoryField
                            className={classNames(
                              "__wab_instance",
                              sty.categoryField__yvtji
                            )}
                            field={"name"}
                          />
                        </h4>
                      )}
                    </DataCtxReader__>
                  </CategoryCollection>
                </Stack__>
                <div className={classNames(projectcss.all, sty.column__uoIk)}>
                  <CategoryCollection
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection__jkZR
                    )}
                    emptyMessage={
                      <DataCtxReader__>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__rAZbY
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
                              sty.text__xvAOz
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
                        <React.Fragment>
                          <h4
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              sty.h4__q40D
                            )}
                          >
                            <CategoryField
                              className={classNames(
                                "__wab_instance",
                                sty.categoryField__lkzjp
                              )}
                              field={"name"}
                            />
                          </h4>
                          <ProductCollection
                            data-plasmic-name={"productCollection"}
                            data-plasmic-override={overrides.productCollection}
                            className={classNames(
                              "__wab_instance",
                              sty.productCollection
                            )}
                            emptyMessage={
                              <DataCtxReader__>
                                {$ctx => (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__vNrUo
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
                                      sty.text__uGv8L
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
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__vaKu7
                                  )}
                                >
                                  <ProductMain
                                    data-plasmic-name={"productMain"}
                                    data-plasmic-override={
                                      overrides.productMain
                                    }
                                    className={classNames(
                                      "__wab_instance",
                                      sty.productMain
                                    )}
                                  />
                                </div>
                              )}
                            </DataCtxReader__>
                          </ProductCollection>
                        </React.Fragment>
                      )}
                    </DataCtxReader__>
                  </CategoryCollection>
                </div>
              </div>
            </div>
          </div>
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
    "paheHeaderMenuTextDark",
    "columns",
    "productCollection",
    "productMain",
    "shopingSection",
    "instagram",
    "footer"
  ],
  paheHeaderMenuTextDark: ["paheHeaderMenuTextDark"],
  columns: ["columns", "productCollection", "productMain"],
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
  paheHeaderMenuTextDark: typeof PaheHeaderMenuTextDark;
  columns: "div";
  productCollection: typeof ProductCollection;
  productMain: typeof ProductMain;
  shopingSection: typeof ShopingSection;
  instagram: typeof Instagram;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShop__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShop__VariantsArgs;
    args?: PlasmicShop__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShop__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShop__ArgsType,
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
          internalArgPropNames: PlasmicShop__ArgProps,
          internalVariantPropNames: PlasmicShop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShop";
  } else {
    func.displayName = `PlasmicShop.${nodeName}`;
  }
  return func;
}

export const PlasmicShop = Object.assign(
  // Top-level PlasmicShop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    paheHeaderMenuTextDark: makeNodeComponent("paheHeaderMenuTextDark"),
    columns: makeNodeComponent("columns"),
    productCollection: makeNodeComponent("productCollection"),
    productMain: makeNodeComponent("productMain"),
    shopingSection: makeNodeComponent("shopingSection"),
    instagram: makeNodeComponent("instagram"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicShop
    internalVariantProps: PlasmicShop__VariantProps,
    internalArgProps: PlasmicShop__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Category",
      description:
        "Inceptos tempor torquent tortor a aptent parturient a a himenaeos in ipsum ad vestibulum euismod ultrices dis vulputate vestibulum non adipiscing.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicShop;
/* prettier-ignore-end */
