// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHQW2pvgnMYkU9Giixod5o
// Component: nFcd2pXWxj3u

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

import TextInput from "../../TextInput"; // plasmic-import: SVp1PMZhgGx2/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: RVCXuLCi6250/component

import { useScreenVariants as useScreenVariantsgt9QMo0RuEb7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GT9qMO0RUEb7/globalVariant
import {
  UnnamedGlobalGroupOfVariantsValue,
  useUnnamedGlobalGroupOfVariants
} from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: iXXrGrNyxZg5/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: uHQW2pvgnMYkU9Giixod5o/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: nFcd2pXWxj3u/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: A6m24pSx5FPZ/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: XXG-MBaBsioY/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"section">;
  textInput?: Flex__<typeof TextInput>;
  copyrightSocialLanguage?: Flex__<typeof CopyrightSocialLanguage>;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgt9QMo0RuEb7(),
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
  });

  return (
    <section
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__tdtBu)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oYiZm)}
        >
          <h3
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3___3Hyi
            )}
          >
            {"Subscribe"}
          </h3>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__lNn89)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vjAwl)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__k6SNd
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"FAQ"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__sBwtt
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Shipping"}
              </PlasmicLink__>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__bR5F3)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___8Y8Sf
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Returns + Exchanges"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__mSRb
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Contact Us"}
              </PlasmicLink__>
            </Stack__>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vcWoC)}
        >
          <h3
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3__uEnHo
            )}
          >
            {"SUPPORT"}
          </h3>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__irl3C)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__t5HUu)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__rNj1G
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"FAQ"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__kwqYw
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Shipping"}
              </PlasmicLink__>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__w0Wup)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__vPkDl
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Returns + Exchanges"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___9NdD
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Contact Us"}
              </PlasmicLink__>
            </Stack__>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__iaj5O)}
        >
          <h3
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3__nnpin
            )}
          >
            {"COMPANY"}
          </h3>
          <div className={classNames(projectcss.all, sty.freeBox__buy2E)}>
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              endIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__hb3P1)}
                  role={"img"}
                />
              }
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Email address..."}
              value={
                generateStateValueProp($state, ["textInput", "value"]) ?? ""
              }
            />

            <RightArrowIcon
              className={classNames(projectcss.all, sty.svg__scYdd)}
              role={"img"}
            />
          </div>
        </Stack__>
      </Stack__>
      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage, {
          [sty.copyrightSocialLanguageglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
            hasVariant(
              globalVariants,
              "unnamedGlobalGroupOfVariants",
              "unnamedVariant"
            )
        })}
      />
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "copyrightSocialLanguage"],
  textInput: ["textInput"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  textInput: typeof TextInput;
  copyrightSocialLanguage: typeof CopyrightSocialLanguage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
