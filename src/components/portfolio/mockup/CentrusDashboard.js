import React from 'react';
import BrowserMockup from '../../ui/BrowserMockup';
import styles from '../../ui/BrowserMockup.module.css';

const CentrusDashboardMockup = () => {
  return (
    <BrowserMockup url="app.centrus.ai/dashboard">
      <div className={styles.centrusContainer}>
        {/* Sidebar */}
        <div className={styles.centrusSidebarWide}>
          <div className={styles.centrusLogo}>
            <div className={styles.centrusLogoIcon}>
              <img src="/images/logo/Centrus_White_Icon.png" alt="Centrus" className={styles.centrusLogoImage} />
            </div>
            <div className={styles.centrusLogoText}>Centrus</div>
          </div>
          
          <div className={styles.centrusNavItems}>
            <div className={`${styles.centrusNavItem} ${styles.active}`}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <span>Dashboard</span>
            </div>
            
            <div className={styles.centrusNavItem}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <span>Chat</span>
            </div>
            
            <div className={styles.centrusNavItem}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <span>Train</span>
            </div>
            
            <div className={styles.centrusNavItem}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <span>Integrations</span>
            </div>
            
            <div className={styles.centrusNavItem}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span>Edit Users</span>
            </div>
            
            <div className={styles.centrusNavItem}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <span>Settings</span>
            </div>
            
            <div className={styles.centrusNavItem}>
              <div className={styles.centrusNavItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <span>Help Center</span>
            </div>
          </div>
          
          <div className={styles.centrusProfileSection}>
            <div className={styles.centrusProfileInfo}>
              <div className={styles.centrusProfileAvatar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className={styles.centrusProfileUser}>
                <div className={styles.centrusProfileName}>Emma Wilson</div>
                <div className={styles.centrusProfileTitle}>Head of Events</div>
              </div>
            </div>
            <div className={styles.centrusLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Log out</span>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className={styles.centrusMain}>
          {/* Header */}
          <div className={styles.centrusHeader}>
            <div>
              <div className={styles.centrusHeaderTitle}>Dashboard</div>
              <div className={styles.centrusHeaderSubtitle}>Welcome back, Emma Wilson</div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className={styles.centrusDashboardContent}>
            {/* Stats Row */}
            <div className={styles.centrusDashboardStatsRow}>
              <div className={styles.centrusDashboardStatCard}>
                <div className={styles.centrusDashboardStatTitle}>Messages Used</div>
                <div className={styles.centrusDashboardStatValue}>568 of 2,500</div>
                <div className={styles.centrusDashboardStatTrend}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
              
              <div className={styles.centrusDashboardStatCard}>
                <div className={styles.centrusDashboardStatTitle}>Storage Used</div>
                <div className={styles.centrusDashboardStatValue}>142MB of 5GB</div>
                <div className={styles.centrusDashboardStatTrend}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                </div>
              </div>
              
              <div className={styles.centrusDashboardStatCard}>
                <div className={styles.centrusDashboardStatTitle}>Active Users</div>
                <div className={styles.centrusDashboardStatValue}>14 of 20</div>
                <div className={styles.centrusDashboardStatTrend}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              
              <div className={styles.centrusDashboardStatCard}>
                <div className={styles.centrusDashboardStatTitle}>Plan Type</div>
                <div className={styles.centrusDashboardStatValue}>Large Team</div>
                <div className={styles.centrusDashboardStatTrend}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Charts Row */}
            <div className={styles.centrusDashboardChartsRow}>
              <div className={styles.centrusDashboardChartCard}>
                <div className={styles.centrusDashboardChartHeader}>
                  <div className={styles.centrusDashboardChartTitle}>Messages</div>
                  <div className={styles.centrusDashboardChartControls}>
                    <select className={styles.centrusDashboardSelect}>
                      <option>Last 30 days</option>
                    </select>
                  </div>
                </div>
                <div className={styles.centrusDashboardChart}>
                  {/* Static line chart */}
                  <svg width="100%" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,150 C50,120 100,100 150,80 C200,60 250,40 300,60 C350,80 400,120 450,100 C500,80 550,60 600,40" fill="none" stroke="#041E42" strokeWidth="2" />
                    <path d="M0,150 C50,120 100,100 150,80 C200,60 250,40 300,60 C350,80 400,120 450,100 C500,80 550,60 600,40" fill="rgba(4, 30, 66, 0.1)" strokeWidth="0" />
                    <g>
                      <text x="0" y="190" fontSize="12" fill="#777">26 Feb</text>
                      <text x="150" y="190" fontSize="12" fill="#777">27 Feb</text>
                      <text x="300" y="190" fontSize="12" fill="#777">28 Feb</text>
                      <text x="450" y="190" fontSize="12" fill="#777">01 Mar</text>
                      <text x="580" y="190" fontSize="12" fill="#777">05 Mar</text>
                    </g>
                    <g>
                      <text x="10" y="150" fontSize="12" fill="#777">5</text>
                      <text x="10" y="100" fontSize="12" fill="#777">10</text>
                      <text x="10" y="50" fontSize="12" fill="#777">15</text>
                      <text x="10" y="20" fontSize="12" fill="#777">20</text>
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className={styles.centrusDashboardChartCard}>
                <div className={styles.centrusDashboardChartHeader}>
                  <div className={styles.centrusDashboardChartTitle}>Data overview</div>
                </div>
                <div className={styles.centrusDashboardChart} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* Simple Pie Chart */}
                  <div style={{ width: '150px', height: '150px', position: 'relative', borderRadius: '50%', background: 'conic-gradient(#041E42 3%, #f5f5f5 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>3%</div>
                      <div style={{ fontSize: '14px', color: '#777' }}>used</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity Table */}
            <div className={styles.centrusDashboardTableCard}>
              <div className={styles.centrusDashboardTableHeader}>
                <div className={styles.centrusDashboardTableTitle}>Registered users</div>
                <div className={styles.centrusDashboardTableControls}>
                  <button className={styles.centrusDashboardViewAllButton}>View All</button>
                </div>
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 120px 1fr 80px', padding: '10px 0', borderBottom: '1px solid #f0f0f0', alignItems: 'center' }}>
                  <div style={{ padding: '0 10px' }}>1</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#041E42', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500' }}>JH</div>
                    <div>
                      <div style={{ fontWeight: '500' }}>James Harrison</div>
                      <div style={{ fontSize: '12px', color: '#777' }}>Managing Director</div>
                    </div>
                  </div>
                  <div>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#e6f7fc', color: '#3b82f6', fontSize: '12px' }}>Super-Admin</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#ffe4e4', color: '#ef4444', fontSize: '12px' }}>Sales</span>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#e6f7ee', color: '#10b981', fontSize: '12px' }}>Finance</span>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#fff5e7', color: '#f59e0b', fontSize: '12px' }}>Open</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', paddingRight: '10px' }}>
                    <span>0</span>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '16px' }}>...</button>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 120px 1fr 80px', padding: '10px 0', borderBottom: '1px solid #f0f0f0', alignItems: 'center' }}>
                  <div style={{ padding: '0 10px' }}>27</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#041E42', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500' }}>RM</div>
                    <div style={{ fontWeight: '500' }}>Robert Mitchell</div>
                  </div>
                  <div>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#e6f7fc', color: '#3b82f6', fontSize: '12px' }}>Admin</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#e6f7ee', color: '#10b981', fontSize: '12px' }}>Finance</span>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#ffe4e4', color: '#ef4444', fontSize: '12px' }}>Sales</span>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: '#fff5e7', color: '#f59e0b', fontSize: '12px' }}>Open</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', paddingRight: '10px' }}>
                    <span>1</span>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '16px' }}>...</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
};

export default CentrusDashboardMockup; 