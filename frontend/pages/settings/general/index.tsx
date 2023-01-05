import useTranslation from "next-translate/useTranslation";
import { SettingsView } from "../../../views/settings/SettingsView";
import { Layout } from "../../../views/layout/Layout";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchAPIAuth } from "../../../api/auth/useAPIAuth";

interface Props {
    csrf: string;
}

const SettingsGeneral = ({ csrf }: Props) => {
    const { t } = useTranslation("settings");

    return (
        <Layout
            csrf={csrf ?? ""}
            small
            header={{
                title: t("heading"),
            }}
        >
            <SettingsView activeTab={"general"} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const queryClient = new QueryClient();
    const csrf = req.cookies["csrf"] ?? "";

    await queryClient.prefetchQuery(
        ["authorization"],
        async () => await fetchAPIAuth({ csrf })
    );

    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
            csrf,
        },
    };
};

export default SettingsGeneral;
