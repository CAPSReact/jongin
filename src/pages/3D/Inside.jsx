import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { InHouse } from "../../components/3D/InHouse";
import { Wrapper, Box, InGameButtonStyle } from "../../styles/style";
// import Loading from "../../components/spinner/Loading";

export default function Inside() {
  const [showOrigin, setShowOrigin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOrigin = () => {
    setLoading(true);

    setTimeout(() => {
      setShowOrigin(!showOrigin);
      setLoading(false);
    }, 2000); // 2초 후에 실행
  };

  return (
    <>
      <Wrapper>
        {loading &&
          /*<Loading loadingText={"빵을 생성하고 있습니다..."} />*/ "빵을 생성하고 있습니다."}
        <Box>
          <Canvas camera={{ position: [10, 200, -400] }}>
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <InHouse showOrigin={showOrigin} scale={Array(3).fill(100)} />
            </group>
          </Canvas>
          <InGameButtonStyle onClick={handleOrigin}>
            {showOrigin ? "식빵 없애기" : "식빵 제작하기"}
          </InGameButtonStyle>
        </Box>
      </Wrapper>
    </>
  );
}
