type DashboardLayoutProps = {
    children: JSX.Element | JSX.Element[]
}

const DashboardLayout = ({ children }:DashboardLayoutProps):JSX.Element => {
    return (
        <main className="flex flex-row">
            { children }
        </main>
    )
}

export default DashboardLayout;