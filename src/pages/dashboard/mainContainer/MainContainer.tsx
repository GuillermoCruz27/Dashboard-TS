import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import {
  SidebarInset,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = () => {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="ml-1" />
          <SidebarSeparator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <Fragment>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink></BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    </SidebarInset>
  );
};

export default MainContainer;
