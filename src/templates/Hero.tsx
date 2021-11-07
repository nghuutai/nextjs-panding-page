import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  List,
  ListItem,
  ListIcon,
  Box,
  Button,
  Text,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Select,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import {ChevronDownIcon, CheckCircleIcon, PhoneIcon, AddIcon, TimeIcon, MoonIcon, PlusSquareIcon} from '@chakra-ui/icons';
import Image from 'next/image';
import {MdCall} from "react-icons/md"

const Hero = () => {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6" backgroud="bg-gray-50">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Giới thiệu 
            </MenuButton>
            <MenuList>
              <MenuItem>Về chúng tôi</MenuItem>
              <MenuItem>Tuyển dụng</MenuItem>
              <MenuItem>Truyền thông</MenuItem>
            </MenuList>
          </Menu>
          </li>
          <li>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Chương Trình 
            </MenuButton>
            <MenuList>
              <MenuItem>Đối tác vận chuyển</MenuItem>
              <MenuItem>Giải pháp cho doanh nghiệp</MenuItem>
            </MenuList>
          </Menu>
          </li>
        </NavbarTwoColumns>
      </Section>
      <Section yPadding="pt-10 pb-28" backgroud="bg-hero-pattern" >
        <Flex justifyContent="center" flexWrap="wrap" flexDirection="row">
          <Box h="auto" flexGrow="initial" marginBottom="20px" marginRight="20px" >
            <Text
              color="white"
              fontSize="2xl"
              fontWeight="normal"
            >
              Taxi sân bay Phù Cát Quy Nhơn Giá chỉ 200.000đ
            </Text>
            <List spacing={3} class="mt-5">
                <ListItem class="mt-2">
                  <Flex align="center" justify="start">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text color="white" fontSize="medium">An toàn, đúng giờ</Text>
                  </Flex>
                </ListItem>
                <ListItem class="mt-2">
                  <Flex align="center" justify="start">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text color="white" fontSize="medium">Miễn phí thay đổi thông tin</Text>
                  </Flex>
                </ListItem>
                <ListItem class="mt-2">
                  <Flex align="center" justify="start">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text color="white" fontSize="medium">Miễn phí chờ 60 phút</Text>
                  </Flex>
                </ListItem>
            </List>
          </Box>
          {/* <Spacer w="10px"  /> */}
          <Box h="auto" flexGrow="initial" className="bg-gray-50" >
            <Tabs isFitted >
              <TabList>
                <Tab isSelected={false} _selected={{ border: "0px solix black" }}>Sân bay, Đường dài</Tab>
                <Tab _selected={{ border: "0px solix black" }}>Thuê xe theo giờ</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                <Stack spacing={3}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Nhập điểm xuất phát" />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Nhập điểm đến" />
                  </InputGroup>
                  <Select placeholder="Chọn số người">
                    <option value="option1">1 người</option>
                    <option value="option2">2 người</option>
                    <option value="option3">3 người</option>
                  </Select>
                </Stack>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Section>
      <Section yPadding="pt-10 pb-10" backgroud="bg-gray-50" >
        <Text textAlign="center" fontSize="xl">Taxi sân bay Phù Cát – Quy Nhơn là một trong các tuyến xe sân bay giá rẻ của Đi Chung triển khai tại 20 sân bay khắp cả nước. Đi Chung liên kết với các hãng taxi toàn quốc, so sánh giá các hãng và chọn ra mức giá tốt nhất cho hành khách.</Text>
      </Section>
      <Section yPadding="pt-10 pb-10" backgroud="bg-gray-50">
        <Text textAlign="center" fontSize="2xl" paddingBottom="10" fontWeight="bold">Đi riêng giá rẻ, đi ghép còn rẻ hơn 40%</Text>
        <Flex justifyContent="space-around">
          <Box className="bg-gray-50" >
            <div className="flex justify-center mb-3">
              <Icon as={AddIcon} w={6} h={6} textAlign="center" color="green.400" />
            </div>
            <Text textAlign="center" fontSize="xl" fontWeight="bold">Đặt trước có xe</Text>
          </Box>
          <Box className="bg-gray-50" >
            <div className="flex justify-center mb-3">
              <Icon as={MoonIcon} w={6} h={6} textAlign="center" color="green.400" />
            </div>
            <Text textAlign="center" fontSize="xl" fontWeight="bold">Cam kết chất lượng</Text>
          </Box>
          <Box className="bg-gray-50" >
            <div className="flex justify-center mb-3">
              <Icon as={PlusSquareIcon} w={6} h={6} textAlign="center" color="green.400" />
            </div>
            <Text textAlign="center" fontSize="xl" fontWeight="bold">Cam kết giá rẻ</Text>
          </Box>
          <Box className="bg-gray-50" >
            <div className="flex justify-center mb-3">
              <Icon as={TimeIcon} w={6} h={6} textAlign="center" color="green.400" />
            </div>
            <Text textAlign="center" fontSize="xl" fontWeight="bold">Giảm khí thải</Text>
          </Box>
        </Flex>
      </Section>
      <Section backgroud="bg-gray-50">
        <Text textAlign="center" fontSize="2xl" paddingBottom="10" fontWeight="bold">Bảng giá taxi sân bay Phù Cát - Quy Nhơn</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Loại xe</Th>
              <Th>Cước phí</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Image src="/xe4cho.png" width="130" height="100" />
                <div>Xe 4 chỗ nhỏ</div>
              </Td>
              <Td>200.000đ</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/xe4chocoprong.png" width="130" height="100" />
                <div>Xe 4 chỗ cốp rộng</div>
              </Td>
              <Td>220.000đ</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/xe7cho.png" width="130" height="100" />
                <div>Xe 7 chỗ</div>
              </Td>
              <Td>350.000đ</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/xe16cho.png" width="130" height="100" />
                <div>Xe 16 chỗ</div>
              </Td>
              <Th>800.000đ</Th>
            </Tr>
          </Tbody>
        </Table>
      </Section>
      <Section backgroud="bg-gray-50">
        <Text textAlign="center" fontSize="2xl" paddingBottom="10" fontWeight="bold">Bảng giá taxi sân bay Phù Cát về các resort</Text>
        <Table variant="simple" overflowX="auto">
          <Thead>
            <Tr>
              <Th>Resort</Th>
              <Th>4 chỗ</Th>
              <Th>7 chỗ</Th>
              <Th>16 chỗ</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>FLC Nhơn</Td>
              <Td>300.000đ</Td>
              <Td>380.000đ</Td>
              <Td>850.000đ</Td>
            </Tr>
            <Tr>
              <Td>Avani Resort</Td>
              <Td>350.000đ</Td>
              <Td>450.000đ</Td>
              <Td>950.000đ</Td>
            </Tr>
            <Tr>
              <Td>Maia Resort</Td>
              <Td>300.000đ</Td>
              <Td>350.000đ</Td>
              <Td>750.000đ</Td>
            </Tr>
          </Tbody>
        </Table>
      </Section>
      <Section backgroud="bg-gray-50" >
        <Box w="100%" h="auto" >
          <Text
            color="black"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
          >
            Tại sao chọn chúng tôi?
          </Text>
          <Text
            color="black"
            fontSize="lg"
            fontWeight="normal"
            textAlign="center"
          >
            Đặt taxi sân bay Phù Cát – Quy Nhơn tại Đi Chung ngay để được trải nghiệm dịch vụ di chuyển thông minh, tiết kiệm, chất lượng nhất thị trường!
          </Text>
          <List spacing={6} class="mt-5 mt">
              <ListItem class="mt-2">
                <Flex align="center" justify="start">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text fontSize="medium">Miễn phí chờ 60 phút đầu tiên</Text>
                </Flex>
              </ListItem>
              <ListItem class="mt-2">
                <Flex align="center" justify="start">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text fontSize="medium">Giá rẻ hơn 20% so với taxi sân bay thông thường. Đi ghép rẻ hơn 40%. Gía trọn gói, không phát sinh thêm phí ngoài</Text>
                </Flex>
              </ListItem>
              <ListItem class="mt-2">
                <Flex align="center" justify="start">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text fontSize="medium">Giá taxi sân bay Phù Cát của Đi Chung minh bạch, không phí ẩn</Text>
                </Flex>
              </ListItem>
              <ListItem class="mt-2">
                <Flex align="center" justify="start">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text fontSize="medium">Giảm ↓20k xe taxi sân bay Phù Cát – Quy Nhơn từ 18h – 22h</Text>
                </Flex>
              </ListItem>
              <ListItem class="mt-2">
                <Flex align="center" justify="start">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text fontSize="medium">Cam kết chất lượng xe, chất lượng dịch vụ, sẵn sàng hoàn tiền nếu hành khách có vấn đề không hài lòng</Text>
                </Flex>
              </ListItem>
          </List>
        </Box>
        <Flex justifyContent="center" marginTop="20px">
          <Button w="40%" fontSize="xl" rightIcon={<MdCall />} colorScheme="blue" variant="outline" onClick={(e) => { e.preventDefault(); window.location.href = 'tel:0352053364';}} >
            Call us
          </Button>
        </Flex>
      </Section>
    </Background>
  )
};

export { Hero };