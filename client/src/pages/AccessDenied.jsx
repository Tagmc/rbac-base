import { Box, Typography, Button, Container, useTheme, Paper, Alert } from '@mui/material';
import { Lock, Home, ContactSupport, Security, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

// Animation cho lock icon
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(244, 67, 54, 0.2); }
  50% { box-shadow: 0 0 20px rgba(244, 67, 54, 0.4), 0 0 30px rgba(244, 67, 54, 0.2); }
  100% { box-shadow: 0 0 5px rgba(244, 67, 54, 0.2); }
`;

function AccessDenied() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleContactSupport = () => {
    alert('Tính năng liên hệ hỗ trợ sẽ được triển khai sớm!');
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.error.light}08 0%, ${theme.palette.warning.light}12 100%)`,
          position: 'relative',
          overflow: 'hidden',
          py: 4,
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.error.main}15, ${theme.palette.warning.main}15)`,
            animation: `${bounce} 4s ease-in-out infinite`,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            right: '10%',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.warning.main}20, ${theme.palette.error.main}20)`,
            animation: `${bounce} 6s ease-in-out infinite reverse`,
            zIndex: 1,
          }}
        />

        {/* Main content card */}
        <Paper
          elevation={8}
          sx={{
            position: 'relative',
            zIndex: 2,
            p: { xs: 4, sm: 6, md: 8 },
            borderRadius: '20px',
            maxWidth: '600px',
            width: '100%',
            background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            animation: `${glow} 3s ease-in-out infinite`,
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              mb: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: '50%',
                background: `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: `${shake} 2s ease-in-out infinite`,
                boxShadow: '0 8px 25px rgba(244, 67, 54, 0.3)',
              }}
            >
              <Lock
                sx={{
                  fontSize: '4rem',
                  color: 'white',
                }}
              />
            </Box>
          </Box>

          {/* Error Code */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: 'bold',
              color: theme.palette.error.main,
              mb: 2,
              textShadow: '0 2px 10px rgba(244, 67, 54, 0.2)',
            }}
          >
            403
          </Typography>

          {/* Main heading */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem' },
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Truy cập bị từ chối
          </Typography>

          {/* Description */}
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              color: theme.palette.text.secondary,
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            Bạn không có quyền truy cập vào tài nguyên này. Vui lòng liên hệ quản trị viên 
            để được cấp quyền truy cập.
          </Typography>

          {/* Alert with additional info */}
          <Alert 
            severity="warning" 
            icon={<Security />}
            sx={{ 
              mb: 4, 
              borderRadius: '12px',
              '& .MuiAlert-message': {
                fontSize: '0.95rem',
              }
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              <strong>Lý do có thể:</strong>
            </Typography>
            <Box component="ul" sx={{ mt: 1, mb: 0, pl: 2 }}>
              <li>Tài khoản của bạn chưa được cấp quyền</li>
              <li>Phiên đăng nhập đã hết hạn</li>
              <li>Tính năng này yêu cầu quyền cao hơn</li>
            </Box>
          </Alert>

          {/* Action buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Home />}
              onClick={handleGoHome}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                fontSize: '1rem',
                textTransform: 'none',
                minWidth: '160px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Về trang chủ
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBack />}
              onClick={handleGoBack}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                fontSize: '1rem',
                textTransform: 'none',
                minWidth: '160px',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Quay lại
            </Button>

            <Button
              variant="text"
              size="large"
              startIcon={<ContactSupport />}
              onClick={handleContactSupport}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                fontSize: '1rem',
                textTransform: 'none',
                minWidth: '160px',
                color: theme.palette.info.main,
                '&:hover': {
                  backgroundColor: `${theme.palette.info.main}10`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Liên hệ hỗ trợ
            </Button>
          </Box>

          {/* Additional help text */}
          <Typography
            variant="body2"
            sx={{
              mt: 4,
              color: theme.palette.text.secondary,
              fontSize: '0.85rem',
              fontStyle: 'italic',
            }}
          >
            Mã lỗi: ACCESS_DENIED_403 | Thời gian: {new Date().toLocaleString('vi-VN')}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default AccessDenied;
