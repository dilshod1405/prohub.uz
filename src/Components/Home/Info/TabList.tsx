import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './tablist.scss'
import buttons from '../../Constants/Buttons/Buttons';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="tablist" sx={{ width: '100%' }}>
      <Box className="head" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered textColor='inherit'>
          <Tab label="Maktab o'quvchilari" {...a11yProps(0)} style={{color: '#64A1FF'}}/>
          <Tab label="Talabalar" {...a11yProps(1)} style={{color: '#64A1FF'}}/>
          <Tab label="Ishchi xodimlar"  {...a11yProps(2)} style={{color: '#64A1FF'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="box">
            <div className="left">
                <div className="text">
                    <h2>5-11 sinf maktab o'quvchilari</h2>
                    <p>Qurilish, texnologiya, dizayn va shu kabi sohalarni o'rganishni maqsad qilib katta hayotga qadam qo'yayotgan o'quvchi yoshlarga dastlabki ko'nikmalarni berishga mo'ljallangan kurslar.</p>
                    <div className="button">{buttons.courses}</div>
                </div>
            </div>
            <div className="right">
                <img src="schoolpupil.png" alt="" />
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="box">
                <div className="left">
                    <div className="text">
                        <h2>Oliy va o'rta maxsus ta'lim talabalari</h2>
                        <p>Qurilish, texnologiya, dizayn va shu kabi aniq sohalar bo'yicha oliy va o'rta maxsus ta'limda o'qib turgan talabalar bilim ko'nikmalarini oshirishga yo'naltirilgan kurslar.</p>
                        <div className="button">{buttons.courses}</div>
                    </div>
                </div>
                <div className="right">
                    <img src="student.png" alt="" />
                </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
            <div className="box">
                <div className="left">
                    <div className="text">
                        <h2>Sohada ishlaydigan xodimlar</h2>
                        <p>Qurilish, texnologiya, dizayn va shu kabi aniq soharda faoliyat yuritib kelayotgan xodimlar bilim ko'nikmalarini oshirishga yo'naltirilgan kurslar.</p>
                        <div className="button">{buttons.courses}</div>
                    </div>
                </div>
                <div className="right">
                    <img src="employee.png" alt="" />
                </div>
            </div>
      </TabPanel>
    </Box>
  );
}

