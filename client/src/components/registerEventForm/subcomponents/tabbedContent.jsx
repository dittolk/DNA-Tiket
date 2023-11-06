import {
    FormControl,
    FormLabel,
    Textarea,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TabIndicator,
  } from '@chakra-ui/react';

function TabbedContent({formik}) {

    return(
        <Tabs isFitted variant={'enclosed'}>
                <TabList mb='1em'>
                  <Tab>Deskripsi Event</Tab>
                  <Tab>Ketentuan Event</Tab>
                </TabList>
                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="blue.500"
                  borderRadius="1px"
                />
                <TabPanels>
                  <TabPanel>
                    <FormControl>
                      <FormLabel fontSize={'lg'}>Deskripsi Event</FormLabel>
                      <Textarea name='deskripsi_event' onChange={formik.handleChange} value={formik.values.deskripsi_event} transition={'0.2s ease-in-out'} resize={'none'} overflowY={'auto'} border={'1px solid black'}
                      _focus={{
                        border:'2px solid black',
                        height:'25vh',
                        transition: 'height 0.2s ease-in-out',
                      }}>
                      </Textarea>
                    </FormControl>
                  </TabPanel>
                  <TabPanel>
                    <FormControl>
                      <FormLabel fontSize={'lg'}>Ketentuan Event</FormLabel>
                      <Textarea name='ketentuan_event' onChange={formik.handleChange} value={formik.values.ketentuan_event} transition={'0.2s ease-in-out'} resize={'none'} overflowY={'auto'} border={'1px solid black'}
                      _focus={{
                        border:'2px solid black',
                        height:'25vh',
                        transition: 'height 0.2s ease-in-out',
                      }}></Textarea>
                    </FormControl>
                  </TabPanel>
                </TabPanels>
              </Tabs>
    )
}

export default TabbedContent;