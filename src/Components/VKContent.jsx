const VKContent = () => {

  return (
    <div style={{ textAlign: "left" }}>
      <p>A reimplimentation of what my work with OpenGL. However, by using Vulkan I, not only hope to have modern features available cross-platform likecomputer shaders (Unavailable on MacOS), but also to get a deeper understanding of CPU-GPU interfaces. The goal is easily create great looking 3D scenes. Built with C++.  </p>

      <p> Some cool things... </p>
      <ul>
        <li>Vertex Buffer Manager: By deffering memory allocation, all mesh data can be allocated in a single, contiguous memory location. Also provides a simple abstraction.
          <pre style={{ textAlign: "left" }}>
            vbAllocator.AddMesh(&vertices, vertexBuffer); <br />
            vbAllocator.AddMesh(&vertices2, vertexBuffer2); <br />
            vbAllocator.AddMesh(&vertices3, vertexBuffer3); <br />

            vbAllocator.AllocateVertexBuffer(vkInst-{">"}physicalDevice);
          </pre>

        </li >
        <li>Uniform Buffer Manager
          <pre style={{ textAlign: "left" }}>
            UB.CreateLayout(vkInst-{">"}device, descriptorSetLayout, sizeof(UniformBufferObject)); <br />
            UB.CreatePipelineLayout(vkInst-{">"}device, vkInst-{">"}pipelineLayout); <br />
            --- Create Pipeline with layout --- <br />
            UB.SubscribeToLayout(descriptorSetLayout, descriptorSet1); <br />
            UB.SubscribeToLayout(descriptorSetLayout, descriptorSet2); <br />
            UB.SubscribeToLayout(descriptorSetLayout, descriptorSet3); <br />
            UB.CreatePool(vkInst-{'>'}device); <br />
            UB.AllocateDescriptors(vkInst-{'>'}device, vkInst-{'>'}physicalDevice); <br />
            UB.SetUniform(descriptorSet1, ubo1); <br />
          </pre>

        </li>
      </ul>

    </div >
  )
}


export default VKContent;
