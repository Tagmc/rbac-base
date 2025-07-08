import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { Home, ArrowBack, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

// Animation cho floating elements
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(5deg); }
  66% { transform: translateY(5px) rotate(-5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

function NotFound() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleGoBack = () => {
    navigate(-1);
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
          background: `linear-gradient(135deg, ${theme.palette.primary.light}10 0%, ${theme.palette.secondary.light}15 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
            animation: `${float} 6s ease-in-out infinite`,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.secondary.main}25, ${theme.palette.primary.main}25)`,
            animation: `${float} 8s ease-in-out infinite reverse`,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '20%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.error.main}20, ${theme.palette.warning.main}20)`,
            animation: `${float} 7s ease-in-out infinite`,
            zIndex: 1,
          }}
        />

        {/* Main content */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {/* 404 Number */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '8rem', sm: '12rem', md: '15rem' },
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0,0,0,0.1)',
              mb: 2,
              animation: `${pulse} 3s ease-in-out infinite`,
            }}
          >
            404
          </Typography>

          {/* Error message */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 1,
            }}
          >
            Oops! Trang không tìm thấy
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem' },
              color: theme.palette.text.secondary,
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
          </Typography>

          {/* Search icon illustration */}
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Search
              sx={{
                fontSize: '4rem',
                color: theme.palette.primary.main,
                opacity: 0.6,
                animation: `${float} 4s ease-in-out infinite`,
              }}
            />
          </Box>

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
                fontSize: '1.1rem',
                textTransform: 'none',
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
                fontSize: '1.1rem',
                textTransform: 'none',
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
          </Box>

          {/* Additional help text */}
          <Typography
            variant="body2"
            sx={{
              mt: 4,
              color: theme.palette.text.secondary,
              fontSize: '0.9rem',
            }}
          >
            Nếu bạn cho rằng đây là lỗi, vui lòng liên hệ với quản trị viên.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default NotFound;
