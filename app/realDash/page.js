"use client";

import React, { useState } from "react";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  DashboardIcon,
  GearIcon,
  EnvelopeClosedIcon,
  PlusCircledIcon,
  Pencil1Icon,
  TrashIcon,
  Cross2Icon,
  ValueNoneIcon,
} from "@radix-ui/react-icons";
import {
  Table,
  Card,
  Text,
  Avatar,
  Flex,
  Box,
  Button,
  Heading,
  Grid,
  Badge,
  Dialog,
  Separator,
} from "@radix-ui/themes";
import * as Popover from "@radix-ui/react-popover";
import ThemeButton from "@/components/ThemeButton";
import * as Form from "@radix-ui/react-form";
import * as Accordion from "@radix-ui/react-accordion";

const dummyAliases = [
  // { id: 1, email: 'news@myalias.com', description: 'For newsletters', active: true },
  // { id: 2, email: 'support@myalias.com', description: 'For customer support', active: false },
  // { id: 3, email: 'info@myalias.com', description: 'For general information', active: true },
  // { id: 4, email: 'events@myalias.com', description: 'For event updates', active: false },
  // { id: 5, email: 'blog@myalias.com', description: 'For blog posts', active: true },
  // { id: 6, email: 'jobs@myalias.com', description: 'For job opportunities', active: false },
  // { id: 7, email: 'press@myalias.com', description: 'For media inquiries', active: true },
  // // { id: 8, email: 'marketing@myalias.com', description: 'For marketing campaigns', active: false },
  // // { id: 9, email: 'sales@myalias.com', description: 'For sales inquiries', active: true },
  // // { id: 10, email: 'feedback@myalias.com', description: 'For customer feedback', active: false }
];

const itemsPerPage = 7;
let pageNumbers = [];

for (let i = 1; i <= Math.ceil(dummyAliases.length / itemsPerPage); i++) {
  pageNumbers.push(i);
}

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dummyAliases, setDummyAliases] = useState([]);
  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  const Sidebar = () => {
    const sidebarItems = [
      {
        name: "Dashboard",
        link: "/dashboard",
        icon: <DashboardIcon className="w-5 h-5" />,
      },
      // {
      //     name: 'Settings',
      //     link: '/dashboard/settings',
      //     icon: <GearIcon className='w-5 h-5' />
      // },
    ];

    return (
      <aside
        className={` fixed top-0 left-0 h-screen w-[300px] overflow-y-auto transition-transform duration-300 ease-in-out z-[11] ${showSidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <nav className="p-4 h-full flex flex-col shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center pb-2">
            <a className="font-light italic text-[24px]" href="/">
              Dalè
            </a>
            <button className="lg:hidden" onClick={toggleSidebar}>
              <Cross1Icon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1">
            <ul className="my-4">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-1 border-gray-300 p-4 rounded-md transition-all duration-300 ease-in-out hover:bg-[#191C1E] focus:bg-[#191C1E]"
                >
                  <li>
                    <a className="flex items-center gap-4" href={item.link}>
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="border-t border-transparent">
                <Card>
                  <Flex gap="3" align="center">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="full"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                      </Text>
                      <Text as="div" size="2" color="gray">
                        tgirmay@outlook.com
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content>
                <div>Hi</div>
                <Popover.Close className="PopoverClose" aria-label="Close">
                  <Cross2Icon />
                </Popover.Close>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </nav>
      </aside>
    );
  };

  const DashboardHeader = () => {
    return (
      <header className="z-10 backdrop-blur-sm p-8 flex items-center gap-4 sticky top-0">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center justify-between w-full">
          <Heading size="7">Dashboard</Heading>
          <ThemeButton />
        </div>
      </header>
    );
  };

  const EmailStatsCard = ({ icon, title, stats }) => {
    return (
      <Card className="">
        <div className="flex items-center gap-4 p-4">
          {icon}
          <div className="flex flex-col">
            <Heading size="2">{title}</Heading>
            <span className="text-[24px] font-bold">{stats}</span>
          </div>
        </div>
      </Card>
    );
  };

  const NewAliasModal = () => {
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const onEmailChange = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
      console.log(email);
    };
    const onDesChange = (e) => {
      e.preventDefault();
      setDescription(e.target.value);
      console.log(description);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      setDummyAliases((prevAliases) => {
        return [
          ...prevAliases,
          {
            id: prevAliases.length + 1,
            email: email,
            description: description,
            active: true,
          },
        ];
      });

      setEmail("");
      setDescription("");
    };

    return (
      <>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className=" cursor-pointer flex items-center gap-2 text-[16px] p-2 border rounded-lg hover:bg-[#191C1E] focus:bg-[#191C1E] transition-all duration-300 ease-in-out">
              <PlusCircledIcon className="w-6 h-6" />
              New Alias
            </button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <div className="flex flex-col gap-y-4">
              <Heading size={"7"}>Create an alias</Heading>
              <Text>
                Enter a prefix and description, we'll sort out the rest.
              </Text>
              <Form.Root onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-4">
                  <Form.Field name="email">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Message match="valueMissing">
                        Please enter your email
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-md"
                        required
                        value={email}
                        onChange={onEmailChange}
                      />
                    </Form.Control>
                  </Form.Field>

                  <Form.Field name="description">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Message match="valueMissing">
                        Please enter a description
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        required
                        value={description}
                        onChange={onDesChange}
                      />
                    </Form.Control>
                  </Form.Field>

                  <Form.Submit asChild>
                    <Dialog.Close>
                      <Button className="w-full" type="submit">
                        Create
                      </Button>
                    </Dialog.Close>
                  </Form.Submit>
                </div>
              </Form.Root>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </>
    );
  };

  const DashboardTable = () => {
    return (
      <div className="mt-8 shadow-lg overflow-hidden gap-y-4 flex flex-col p-4 rounded-md">
        <div className="flex justify-between items-center">
          <Heading>Your Aliases</Heading>
          <NewAliasModal />
        </div>
        {dummyAliases.length != 0 ? (
          <>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {dummyAliases.map((alias) => (
                  <Table.Row key={alias.id} className="">
                    <Table.RowHeaderCell>{alias.email}</Table.RowHeaderCell>
                    <Table.Cell>{alias.description}</Table.Cell>
                    <Table.Cell>
                      {alias.active == true ? (
                        <Badge color="green">Active</Badge>
                      ) : (
                        <Badge color="crimson">Inactive</Badge>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-6">
                        <button className="rounded-full dark:hover:bg-[#191C1E] p-2">
                          <Pencil1Icon className="w-5 h-5" />
                        </button>
                        <button className="rounded-full hover:bg-[#191C1E] p-2">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </>
        ) : (
          <div className="flex justify-center items-center h-[300px] flex-col gap-y-4">
            <ValueNoneIcon className="w-[100px] h-[100px]" />
            <Heading size={"8"}>No Aliases</Heading>
            <Text size={"3"}>Create an alias to get started</Text>
            <NewAliasModal />
          </div>
        )}
        <div className="flex gap-2 justify-end">
          {/* Pagination */}
          {pageNumbers.map((nums) => (
            <button className="cursor-pointer flex items-center justify-center gap-2 w-10 h-10 text-[16px] p-2 border rounded-lg hover:bg-[#191C1E] focus:bg-[#191C1E] transition-all duration-300 ease-in-out">
              {nums}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-1 overflow-y-auto ml-0 lg:ml-[300px] h-screen">
        <DashboardHeader />
        <main className="p-8">
          <Grid columns={{ initial: "1", sm: "3" }} gap="3" width="auto">
            <EmailStatsCard
              icon={<EnvelopeClosedIcon className="w-10 h-10" />}
              title={"Total emails sent"}
              stats={24}
            />
            <EmailStatsCard
              icon={<EnvelopeClosedIcon className="w-10 h-10" />}
              title={"Total emails sent"}
              stats={24}
            />
            <EmailStatsCard
              icon={<EnvelopeClosedIcon className="w-10 h-10" />}
              title={"Total emails sent"}
              stats={24}
            />
          </Grid>

          <DashboardTable />
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
